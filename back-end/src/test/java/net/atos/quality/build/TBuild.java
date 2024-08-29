package net.atos.quality.build;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.build.*;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.user.RJenkinsUser;
import net.atos.quality.service.build.SBuild;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TBuild {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    private static Build build;
    private static Build buildNull;
    private static Build buildUpdate;
    private JenkinsUser jenkinsUser;

    private LocalDateTime now;
    private GitRepository repository;
    private BuildProduct buildProduct;
    private GitBranch branch;
    private DateTimeFormatter formatter;
    private UpsourceCause upsourceCause;

    @Autowired
    private RJenkinsUser rJenkinsUser;
    @Autowired
    private RBuildProduct rBuildProduct;
    @Autowired
    private RBuild rBuild;
    @Autowired
    private RGitBranch rGitBranch;
    @Autowired
    private RGitRepository rGitRepository;


    //////////////////////////////////////////////////////////////////////////////////////
    //                               SETUP                                              //
    //////////////////////////////////////////////////////////////////////////////////////

    @BeforeAll
    public void setup() {
        //Prepare
        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        now = LocalDateTime.parse(LocalDateTime.now().format(formatter));
        jenkinsUser= new JenkinsUser("testJenkinsUser");
        rJenkinsUser.save(jenkinsUser);
        repository = new GitRepository("SICS/outillage/pims");
        rGitRepository.save(repository);
        branch = new GitBranch("develop");
        rGitBranch.save(branch);
        buildProduct = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS", "123", "PENDING", BuildProductType.LIBRARY,"version-123", BuildProductModel.SICS,branch);
        rBuildProduct.save(buildProduct);

    }

    @BeforeEach
    void setupEach() {
        build = new Build(jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"PENDING","1234",repository,branch);
        buildUpdate = new Build(buildProduct,jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"FINISH","1234",repository,branch,"SUCCESS","SUCCESS","SUCCESS","UNKNOWN","UNKNOWN");
        buildNull = new Build(100000, null, null,null, null,null, null, null, null, null, null, null, null,null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createBuild_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(build)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.repository.id", is((int) build.getRepository().getId())))
                .andExpect(jsonPath("$.branch.id", is((int) build.getBranch().getId())))
                .andExpect(jsonPath("$.resultBuild", is(build.getResultBuild())))
                .andExpect(jsonPath("$.resultTU", is(build.getResultTU())))
                .andExpect(jsonPath("$.buildType", is(build.getBuildType().getLabel())))
                .andExpect(jsonPath("$.status", is(build.getStatus())))
                .andExpect(jsonPath("$.startDate", is(build.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(build.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.jenkinsNumber", is(build.getJenkinsNumber())))
                .andExpect(jsonPath("$.resultSonar", is(build.getResultSonar())));

    }

    @Test
    public void createBuild_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("Missing field 'branch', Missing field 'type', Missing field 'repository', Missing field 'startDate', Missing field 'status', Missing field 'jenkinsNumber'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createBuild_idAlreadyExist() throws Exception {
        //PREPARE
        build = rBuild.save(build);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(build)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("Build with id : " + build.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }



    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void getABuild_isOk() throws Exception {
        //PREPARE
        build = rBuild.save(build);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build/{id}", build.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.repository.id", is((int) build.getRepository().getId())))
                .andExpect(jsonPath("$.branch.id", is((int) build.getBranch().getId())))
                .andExpect(jsonPath("$.resultBuild", is(build.getResultBuild())))
                .andExpect(jsonPath("$.resultTU", is(build.getResultTU())))
                .andExpect(jsonPath("$.buildType", is(build.getBuildType().getLabel())))
                .andExpect(jsonPath("$.status", is(build.getStatus())))
                .andExpect(jsonPath("$.startDate", is(build.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(build.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.jenkinsNumber", is(build.getJenkinsNumber())))
                .andExpect(jsonPath("$.resultSonar", is(build.getResultSonar())));
    }

    @Test
    public void getABuild_isNotFound() throws Exception {
        //PREPARE
        long buildId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build/{id}", buildId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    @Test
    public void getABuild_ByJenkinsNumberAndBuildNumber_isOk () throws Exception {
        //PREPARE
        build = new Build(jenkinsUser,now,now.plusHours(3),BuildType.GRADLE,"PENDING","0007",repository,branch);
        rBuild.save(build);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build/jenkins/{jenkins}/{type}", "0007","GRADLE")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getABuild_ByJenkinsNumberAndBuildNumber_isKo () throws Exception {
        //PREPARE
        long buildId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build/jenkins/{jenkins}/{type}", "123456","TESTKO")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    @Test
    public void getABuild_ByBuildProductAndRepositoryName_isOk() throws Exception {

        rBuild.save(build);
        //ACT
        ResultActions response = mockMvc.perform(get("/production/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .param("buildProduct", String.valueOf(buildProduct.getId()))
                .param("repositoryName",repository.getName())
        );
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getABuild_ByBuildProductAndRepositoryName_iskO() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .param("buildProduct", String.valueOf(1000000))
                .param("repositoryName",repository.getName())
        );
        //ASSERT
        response.andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.value", is("No build for buildProduct :'"+1000000+"' and repository :'"+repository.getName()+"'")))
                .andDo(print());
    }

    @Test
    public void getAllType() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/build/type")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(2)));

    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateABuild_isOk() throws Exception {
        //PREPARE
        Build rebuildBuild = new Build(jenkinsUser,now,now.plusHours(3),BuildType.GRADLE,"PENDING","00010",repository,branch);
        rBuild.save(rebuildBuild);
        buildUpdate.setRebuildFrom(rebuildBuild);
        build = rBuild.save(build);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        //ACT
        ResultActions response = mockMvc.perform(put("/production/build/{id}", build.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.buildProduct.id", is((int) buildUpdate.getBuildProduct().getId())))
                .andExpect(jsonPath("$.repository.id", is((int) buildUpdate.getRepository().getId())))
                .andExpect(jsonPath("$.branch.id", is((int) buildUpdate.getBranch().getId())))
                .andExpect(jsonPath("$.resultBuild", is(buildUpdate.getResultBuild())))
                .andExpect(jsonPath("$.resultTU", is(buildUpdate.getResultTU())))
                .andExpect(jsonPath("$.buildType", is(buildUpdate.getBuildType().getLabel())))
                .andExpect(jsonPath("$.status", is(buildUpdate.getStatus())))
                .andExpect(jsonPath("$.startDate", is(buildUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(buildUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.jenkinsNumber", is(buildUpdate.getJenkinsNumber())));
    }

    @Test
    public void updateABuild_isNotFound() throws Exception {
        //PREPARE
        long buildId = 1000L;
        rBuild.save(build);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/build/{id}", buildId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteABuild_isOk() throws Exception {
        //PREPARE
        rBuild.save(build);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/build/{id}", build.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteABuild_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/build/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("Build not exist(30000)")))
                .andExpect(status().isBadRequest());
    }
}