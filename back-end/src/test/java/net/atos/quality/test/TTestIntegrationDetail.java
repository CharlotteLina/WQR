package net.atos.quality.test;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationDetail;
import net.atos.quality.model.test.TestIntegrationType;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.test.RTestIntegrationDetail;
import net.atos.quality.repository.test.RTestIntegration;
import net.atos.quality.repository.user.RJenkinsUser;
import org.junit.jupiter.api.*;
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
public class TTestIntegrationDetail {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RTestIntegrationDetail rTestIntegrationDetail;

    @Autowired
    private RTestIntegration rTestIntegration;
    @Autowired
    private ObjectMapper objectMapper;

    private static TestIntegrationDetail testIntegrationDetail;
    private static TestIntegrationDetail testIntegrationDetailNull;
    private static TestIntegrationDetail testIntegrationDetailUpdate;

    private LocalDateTime now;
    private TestIntegration testIntegration;
    private DateTimeFormatter formatter;

    private GitRepository repository;
    private BuildProduct buildProduct;
    private GitBranch branch;

    private JenkinsUser jenkinsUser;
    @Autowired
    private RJenkinsUser rJenkinsUser;
    @Autowired
    private RBuildProduct rBuildProduct;
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
        repository = new GitRepository("TestRepositoryBuild");
        rGitRepository.save(repository);
        branch = new GitBranch("testBuild");
        rGitBranch.save(branch);
        buildProduct = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS", "123", "PENDING", BuildProductType.LIBRARY,"version-123", BuildProductModel.SICS,branch);
        rBuildProduct.save(buildProduct);
        testIntegration = new TestIntegration(buildProduct,TestIntegrationType.STIMPACK,now,now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0, DeployPFName.AIX_ENGIE_PF,"1.1.1.1");
        rTestIntegration.save(testIntegration);
    }

    @BeforeEach
    void setupEach() {
        testIntegrationDetail = new TestIntegrationDetail(testIntegration,now,now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0);
        testIntegrationDetailUpdate = new TestIntegrationDetail(testIntegration,now,now.plusHours(2),"FAILED","FINISH","MACS_VEHICULE",10,2,8,0,0,"[IDH1: OK]");
        testIntegrationDetailNull = new TestIntegrationDetail(1,null,null,null,null,null,null,null,null,null,null,null,null);
    }

    @AfterEach
    void setupAfter() {
        rTestIntegrationDetail.deleteAll();
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createTestIntegrationDetails_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegrationDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationDetail)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.startDate", is(testIntegrationDetail.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegrationDetail.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.testIntegration.id", is((int)testIntegrationDetail.getTestIntegration().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegrationDetail.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegrationDetail.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegrationDetail.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegrationDetail.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegrationDetail.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegrationDetail.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegrationDetail.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegrationDetail.getNbTestWarn())))
                .andExpect(jsonPath("$.detail", is(testIntegrationDetail.getDetail())));

    }

    @Test
    public void createTestIntegrationDetails_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegrationDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationDetailNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'testIntegration', Missing field 'startDate', Missing field 'result', Missing field 'status', Missing field 'scenarioName', Missing field 'nbTestTotal', Missing field 'nbTestOk', Missing field 'nbTestKo', Missing field 'nbTestNa', Missing field 'nbTestWarn'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createTestIntegrationDetails_idAlreadyExist() throws Exception {
        //PREPARE
        rTestIntegrationDetail.save(testIntegrationDetail);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegrationDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationDetail)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("TestIntegrationDetail with id : " + testIntegrationDetail.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllTestIntegrationDetails_isOk() throws Exception {
        //PREPARE
        List<TestIntegrationDetail> listOfTests = rTestIntegrationDetail.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegrationDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getATestIntegrationDetails_isOk() throws Exception {
        //PREPARE
        testIntegrationDetail = rTestIntegrationDetail.save(testIntegrationDetail);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegrationDetail/{id}", testIntegrationDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(testIntegrationDetail.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegrationDetail.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.testIntegration.id", is((int)testIntegrationDetail.getTestIntegration().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegrationDetail.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegrationDetail.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegrationDetail.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegrationDetail.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegrationDetail.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegrationDetail.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegrationDetail.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegrationDetail.getNbTestWarn())))
                .andExpect(jsonPath("$.detail", is(testIntegrationDetail.getDetail())));
    }


    @Test
    public void getATestIntegrationDetails_isNotFound() throws Exception {
        //PREPARE
        long testProductDetailsId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegrationDetail/{id}", testProductDetailsId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }



    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateATestIntegrationDetails_isOk() throws Exception {
        //PREPARE
        testIntegrationDetail = rTestIntegrationDetail.save(testIntegrationDetail);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/testIntegrationDetail/{id}", testIntegrationDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationDetailUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(testIntegrationDetailUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegrationDetailUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.testIntegration.id", is((int)testIntegrationDetailUpdate.getTestIntegration().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegrationDetailUpdate.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegrationDetailUpdate.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegrationDetailUpdate.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegrationDetailUpdate.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegrationDetailUpdate.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegrationDetailUpdate.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegrationDetailUpdate.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegrationDetailUpdate.getNbTestWarn())))
                .andExpect(jsonPath("$.detail", is(testIntegrationDetailUpdate.getDetail())));
    }

    @Test
    public void updateATestIntegrationDetails_isNotFound() throws Exception {
        //PREPARE
        long testProductDetailsId = 1000L;
        rTestIntegrationDetail.save(testIntegrationDetail);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/testIntegrationDetail/{id}", testProductDetailsId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationDetailUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                            DELETE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteATestIntegrationDetails_isOk() throws Exception {
        //PREPARE
        rTestIntegrationDetail.save(testIntegrationDetail);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/testIntegrationDetail/{id}", testIntegrationDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteADTestIntegrationDetails_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/testIntegrationDetail/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("TestIntegrationDetail not exist.")))
                .andExpect(status().isBadRequest());
    }
}