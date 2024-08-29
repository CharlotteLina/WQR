package net.atos.quality.test;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationType;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.test.RTestIntegration;
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
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TTestIntegration {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RTestIntegration RTestIntegration;
    @Autowired
    private ObjectMapper objectMapper;

    private static TestIntegration testIntegration;
    private static TestIntegration testIntegrationNull;
    private static TestIntegration testIntegrationUpdate;

    private LocalDateTime now;
    private DateTimeFormatter formatter;
    private JenkinsUser jenkinsUser;

    private GitRepository repository;
    private BuildProduct buildProduct;
    private GitBranch branch;
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
    }

    @BeforeEach
    void setupEach() {
        testIntegration = new TestIntegration(buildProduct,TestIntegrationType.STIMPACK,now,now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0, DeployPFName.AIX_ENGIE_PF,"1.1.1.1");
        testIntegrationUpdate = new TestIntegration(buildProduct,TestIntegrationType.STIMPACK,now,now.plusHours(2),"FAILED","FINISH","MACS_VEHICULE",10,2,5,0,3, DeployPFName.AIX_SICS_PF_DEV,"1.1.1.1");
        testIntegrationNull = new TestIntegration(1,null, null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createTestIntegration_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegration")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegration)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.startDate", is(testIntegration.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegration.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.buildProduct.id", is((int)testIntegration.getBuildProduct().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegration.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegration.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegration.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegration.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegration.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegration.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegration.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegration.getNbTestWarn())))
                .andExpect(jsonPath("$.pfName", is(testIntegration.getPfName().getName())))
                .andExpect(jsonPath("$.machines", is(testIntegration.getMachines())))
                .andExpect(jsonPath("$.type", is(testIntegration.getType().getName())));

    }

    @Test
    public void createTestIntegration_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegration")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'type', Missing field 'startDate', Missing field 'result', Missing field 'status', Missing field 'scenarioName', Missing field 'nbTestTotal', Missing field 'nbTestOk', Missing field 'nbTestKo', Missing field 'nbTestNa', Missing field 'nbTestWarn', Missing field 'pfName', Missing field 'machines', Missing field 'buildProduct'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createTestIntegration_idAlreadyExist() throws Exception {
        //PREPARE
        testIntegration = RTestIntegration.save(testIntegration);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/testIntegration")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegration)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Test with id : " + testIntegration.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }



    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllTestIntegration_isOk() throws Exception {
        //PREPARE
        List<TestIntegration> listOfTests = RTestIntegration.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegration")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getATestIntegration_isOk() throws Exception {
        //PREPARE
        testIntegration = RTestIntegration.save(testIntegration);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegration/{id}", testIntegration.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(testIntegration.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegration.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.buildProduct.id", is((int)testIntegration.getBuildProduct().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegration.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegration.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegration.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegration.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegration.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegration.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegration.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegration.getNbTestWarn())))
                .andExpect(jsonPath("$.pfName", is(testIntegration.getPfName().getName())))
                .andExpect(jsonPath("$.machines", is(testIntegration.getMachines())))
                .andExpect(jsonPath("$.type", is(testIntegration.getType().getName())));
    }


    @Test
    public void getATestIntegration_isNotFound() throws Exception {
        //PREPARE
        long testProductId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegration/{id}", testProductId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    @Test
    public void getAllType() throws Exception {
        //PREPARE
        long buildId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/testIntegration/type", buildId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(5)));

    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateATestIntegration_isOk() throws Exception {
        //PREPARE
        TestIntegration testIntegrationRebuild = new TestIntegration(buildProduct,TestIntegrationType.STIMPACK,now.plusHours(1),now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0,DeployPFName.AIX_SICSD_PF_DEV,"1.1.1.2");
        testIntegrationRebuild = RTestIntegration.save(testIntegrationRebuild);
        testIntegration = RTestIntegration.save(testIntegration);
        testIntegrationUpdate.setEndDate(now.plusHours(2));
        testIntegrationUpdate.setRebuildFrom(testIntegrationRebuild);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/testIntegration/{id}", testIntegration.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(testIntegrationUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(testIntegrationUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.buildProduct.id", is((int)testIntegrationUpdate.getBuildProduct().getId())))
                .andExpect(jsonPath("$.scenarioName", is(testIntegrationUpdate.getScenarioName())))
                .andExpect(jsonPath("$.result", is(testIntegrationUpdate.getResult())))
                .andExpect(jsonPath("$.status", is(testIntegrationUpdate.getStatus())))
                .andExpect(jsonPath("$.nbTestTotal", is(testIntegrationUpdate.getNbTestTotal())))
                .andExpect(jsonPath("$.nbTestOk", is(testIntegrationUpdate.getNbTestOk())))
                .andExpect(jsonPath("$.nbTestKo", is(testIntegrationUpdate.getNbTestKo())))
                .andExpect(jsonPath("$.nbTestNa", is(testIntegrationUpdate.getNbTestNa())))
                .andExpect(jsonPath("$.nbTestWarn", is(testIntegrationUpdate.getNbTestWarn())))
                .andExpect(jsonPath("$.pfName", is(testIntegrationUpdate.getPfName().getName())))
                .andExpect(jsonPath("$.machines", is(testIntegrationUpdate.getMachines())))
                .andExpect(jsonPath("$.type", is(testIntegrationUpdate.getType().getName())));
    }

    @Test
    public void updateATestIntegration_isNotFound() throws Exception {
        //PREPARE
        long testProductId = 1000L;
        RTestIntegration.save(testIntegration);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/testIntegration/{id}", testProductId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testIntegrationUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            DELETE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteATestIntegration_isOk() throws Exception {
        //PREPARE
        RTestIntegration.save(testIntegration);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/testIntegration/{id}", testIntegration.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteADTestIntegration_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/testIntegration/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("TestIntegration not exist.")))
                .andExpect(status().isBadRequest());
    }
}