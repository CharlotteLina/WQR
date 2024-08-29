package net.atos.quality.build;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.build.*;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.git.RGitBranch;
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
import java.util.ArrayList;
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
public class TBuildUnitTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    
    private LocalDateTime now;
    private DateTimeFormatter formatter;
    private JenkinsUser jenkinsUser;
    @Autowired
    private RBuildUnitTest rBuildUnitTest;
    @Autowired
    private RBuildProduct rBuildProduct;
    @Autowired
    private RBuild rBuild;
    @Autowired
    private RGitBranch rGitBranch;
    @Autowired
    private RGitRepository rGitRepository;
    @Autowired
    private RJenkinsUser rJenkinsUser;
    private BuildUnitTest buildUnitTest;
    private BuildUnitTest buildUnitTestNull;
    private BuildUnitTest buildUnitTestUpdate;

    private GitRepository repository;
    private BuildProduct buildProduct;
    private Build build;
    private GitBranch branch;



    //////////////////////////////////////////////////////////////////////////////////////
    //                               SETUP                                              //
    //////////////////////////////////////////////////////////////////////////////////////

    @BeforeAll
    public void setup() {
        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        now = LocalDateTime.parse(LocalDateTime.now().format(formatter));
        jenkinsUser= new JenkinsUser("testJenkinsUser");
        rJenkinsUser.save(jenkinsUser);
        repository = new GitRepository("TestRepositoryBuild");
        rGitRepository.save(repository);

        branch = new GitBranch("testBuild");
        rGitBranch.save(branch);
        buildProduct = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS","123", "PENDING", BuildProductType.LIBRARY,"version-123", BuildProductModel.SICS, branch);
        buildProduct=rBuildProduct.save(buildProduct);
        build = new Build(jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"PENDING","1234",repository,branch);
        rBuild.save(build);
        
    }

    @BeforeEach
    void setupEach() {
        buildUnitTest = new BuildUnitTest(build,"SUCCESS","test-runner-",10,10,0,0);
        buildUnitTestUpdate = new BuildUnitTest(build,"FAILURE","test-runner-",10,5,2,0);
        buildUnitTestNull = new BuildUnitTest(1, null, null,null,null,null,null,null);
    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createUnitTest_isCreated() throws Exception {
        buildUnitTest = new BuildUnitTest(build,"SUCCESS","test-runner-create",10,10,0,0);

        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildUnitTest")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUnitTest)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(buildUnitTest.getName())))
                .andExpect(jsonPath("$.result", is(buildUnitTest.getResult())))
                .andExpect(jsonPath("$.nbTestTotal", is(buildUnitTest.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(buildUnitTest.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(buildUnitTest.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestSkipped", is(buildUnitTest.getNbTestSkipped())));
    }

    @Test
    public void createUnitTest_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildUnitTest")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUnitTestNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'name', Missing field 'result', Missing field 'nbTestTotal', Missing field 'nbTestOk', Missing field 'nbTestKo', Missing field 'nbTestSkipped'")))
                .andExpect(status().isBadRequest());
    }


    @Test
    public void createUnitTest_idAlreadyExist() throws Exception {
        //PREPARE
        buildUnitTest = rBuildUnitTest.save(buildUnitTest);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildUnitTest")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUnitTest)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("BuildUnitTest with id : " + buildUnitTest.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createUnitTestWithJenkinsUnitTestForBuild() throws Exception {
        //PREPARE
        List<JenkinsUnitTest> jenkinsUnitTestList = new ArrayList<>();
        jenkinsUnitTestList.add(new JenkinsUnitTest("Test1",repository.getName(),2,1,1));
        JenkinsUnitTestParent jenkinsUnitTestParent = new JenkinsUnitTestParent(build.getId(),false,jenkinsUnitTestList);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildUnitTest/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUnitTestParent)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void createUnitTestWithJenkinsUnitTestForBuildProduct() throws Exception {

        //PREPARE
        Build jbuild = new Build(jenkinsUser,now,now.plusHours(5),BuildType.MAVEN,"PENDING","1239",repository,branch);
        jbuild.setBuildProduct(buildProduct);
        jbuild= rBuild.save(jbuild);
        List<JenkinsUnitTest> jenkinsUnitTestList = new ArrayList<>();
        jenkinsUnitTestList.add(new JenkinsUnitTest("Test2",repository.getName(),2,0,1));
        JenkinsUnitTestParent jenkinsUnitTestParent = new JenkinsUnitTestParent(buildProduct.getId(),true,jenkinsUnitTestList);

        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildUnitTest/build")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUnitTestParent)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isOk());
    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllUnitTest_isOk() throws Exception {
        //PREPARE
        List<BuildUnitTest> listOfBuildUnitTest = rBuildUnitTest.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildUnitTest")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfBuildUnitTest.size())));

    }

    @Test
    public void getAUnitTest_isOk() throws Exception {
        //PREPARE
        buildUnitTest = rBuildUnitTest.save(buildUnitTest);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildUnitTest/{id}", buildUnitTest.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(buildUnitTest.getName())))
                .andExpect(jsonPath("$.result", is(buildUnitTest.getResult())))
                .andExpect(jsonPath("$.nbTestTotal", is(buildUnitTest.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(buildUnitTest.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(buildUnitTest.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestSkipped", is(buildUnitTest.getNbTestSkipped())));
    }




    @Test
    public void getAUnitTest_isNotFound() throws Exception {
        //PREPARE
        long unitTestId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildUnitTest/{id}", unitTestId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAUnitTest_isOk() throws Exception {
        //PREPARE
        buildUnitTest = rBuildUnitTest.save(buildUnitTest);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/buildUnitTest/{id}", buildUnitTest.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUnitTestUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(buildUnitTestUpdate.getName())))
                .andExpect(jsonPath("$.result", is(buildUnitTestUpdate.getResult())))
                .andExpect(jsonPath("$.nbTestTotal", is(buildUnitTestUpdate.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(buildUnitTestUpdate.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(buildUnitTestUpdate.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestSkipped", is(buildUnitTestUpdate.getNbTestSkipped())));
    }

    @Test
    public void updateAUnitTestUpdate_isNotFound() throws Exception {
        //PREPARE
        long unitTestId = 1000L;
        rBuildUnitTest.save(buildUnitTest);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/buildUnitTest/{id}", unitTestId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildUnitTestUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAUnitTest_isOk() throws Exception {
        //PREPARE
        rBuildUnitTest.save(buildUnitTest);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/buildUnitTest/{id}", buildUnitTest.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteUnitTest_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/buildUnitTest/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("BuildUnitTest not exist.")))
                .andExpect(status().isBadRequest());
    }
}