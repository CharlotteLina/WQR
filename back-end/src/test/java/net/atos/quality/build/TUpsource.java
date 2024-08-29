package net.atos.quality.build;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.upsource.Upsource;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.build.RBuild;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.upsource.RUpsource;
import net.atos.quality.repository.upsource.RUpsourceCause;
import net.atos.quality.repository.user.RJenkinsUser;
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

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TUpsource {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    private static Build build;
    private JenkinsUser jenkinsUser;
    private LocalDateTime now;
    private GitRepository repository;
    private GitBranch branch;
    private DateTimeFormatter formatter;
    private static Upsource upsource;
    private static Upsource upsourceNull;
    private static Upsource upsourceUpdate;

    @Autowired
    private RJenkinsUser rJenkinsUser;

    @Autowired
    private RBuild rBuild;
    @Autowired
    private RGitBranch rGitBranch;
    @Autowired
    private RGitRepository rGitRepository;

    @Autowired
    private RUpsource rUpsource;



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
        repository = new GitRepository("testRepo");
        rGitRepository.save(repository);
        branch = new GitBranch("testBranch");
        rGitBranch.save(branch);
        build = new Build(jenkinsUser,now,now.plusHours(3), BuildType.MAVEN,"PENDING","1234",repository,branch);
        rBuild.save(build);

    }

    @BeforeEach
    void setupEach() {
        upsource = new Upsource(build, UpsourceCauseType.MISSING,"Info - issue 123","Author1","","abc","",now);
        upsourceUpdate = new Upsource(build, UpsourceCauseType.NOTCLOSED,"Info - issue 123","Author1","DEF","abc","",now);
        upsourceNull = new Upsource(1, null,null, null,null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createUpsource_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/upsource")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(upsource)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.author", is(upsource.getAuthor())))
                .andExpect(jsonPath("$.information", is(upsource.getInformation())))
                .andExpect(jsonPath("$.reviewerFinish", is(upsource.getReviewerFinish())))
                .andExpect(jsonPath("$.reviewerNotFinish", is(upsource.getReviewerNotFinish())))
                .andExpect(jsonPath("$.type", is(upsource.getType().getLabel())))
                .andExpect(jsonPath("$.raised", is(upsource.getRaised())))
                .andExpect(jsonPath("$.build.id", is((int)upsource.getBuild().getId())));
    }

    @Test
    public void createUpsource_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/upsource")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(upsourceNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isBadRequest());

    }




    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void getAUpsource_isOk() throws Exception {
        //PREPARE
        upsource = rUpsource.save(upsource);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsource/{id}", upsource.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.author", is(upsource.getAuthor())))
                .andExpect(jsonPath("$.information", is(upsource.getInformation())))
                .andExpect(jsonPath("$.reviewerFinish", is(upsource.getReviewerFinish())))
                .andExpect(jsonPath("$.reviewerNotFinish", is(upsource.getReviewerNotFinish())))
                .andExpect(jsonPath("$.type", is(upsource.getType().getLabel())))
                .andExpect(jsonPath("$.raised", is(upsource.getRaised())))
                .andExpect(jsonPath("$.build.id", is((int)upsource.getBuild().getId())));
    }

    @Test
    public void getAUpsource_isNotFound() throws Exception {
        //PREPARE
        long upsourceId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsource/{id}", upsourceId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
        );

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


    @Test
    public void getAllUpsource_isOk() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsource")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
        );

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void getAllUpsourceForABuildId_isOk() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsource/build/{id}",build.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
        );

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }
    @Test
    public void getAllType() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsource/type")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(3)));

    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAUpsource_isOk() throws Exception {
        //PREPARE
        upsource = rUpsource.save(upsource);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/upsource/{id}", upsource.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(upsourceUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.author", is(upsourceUpdate.getAuthor())))
                .andExpect(jsonPath("$.information", is(upsourceUpdate.getInformation())))
                .andExpect(jsonPath("$.reviewerFinish", is(upsourceUpdate.getReviewerFinish())))
                .andExpect(jsonPath("$.reviewerNotFinish", is(upsourceUpdate.getReviewerNotFinish())))
                .andExpect(jsonPath("$.type", is(upsourceUpdate.getType().getLabel())))
                .andExpect(jsonPath("$.raised", is(upsourceUpdate.getRaised())))
                .andExpect(jsonPath("$.build.id", is((int)upsourceUpdate.getBuild().getId())));
    }

    @Test
    public void updateAUpsource_isNotFound() throws Exception {
        //PREPARE
        long upsourceId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(put("/production/upsource/{id}", upsourceId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(upsourceUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAUpsource_isOk() throws Exception {
        //PREPARE
        upsource=rUpsource.save(upsource);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/upsource/{id}", upsource.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteAUpsource_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/upsource/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("Upsource not exist.")))
                .andExpect(status().isBadRequest());
    }
}