package net.atos.quality.ihm;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;

import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationType;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.build.RBuild;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.deploy.RDeployPF;
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
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TReport {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    private static Build build;
    private static Build buildBis;

    private JenkinsUser jenkinsUser;



    private static DeployPF deployPF;
    private LocalDateTime now;
    private GitRepository repository;
    private BuildProduct buildProduct;
    private BuildProduct buildProductBis;

    private GitBranch branch;
    private static TestIntegration testIntegration;
    private static TestIntegration testIntegrationBis;
    private DateTimeFormatter formatter;
    private UpsourceCause upsourceCause;
    @Autowired
    private RDeployPF rDeployPF;
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
    @Autowired
    private RTestIntegration rTestIntegration;





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
        buildProduct = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS", "123", "PENDING", BuildProductType.PROJECT,"version-test-report", BuildProductModel.SICS,branch);
        rBuildProduct.save(buildProduct);
        buildProductBis = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS", "124", "SUCCESS", BuildProductType.PROJECT,"version-test-report-124", BuildProductModel.SICS,branch);
        buildProductBis.setRebuildFrom(buildProduct);
        rBuildProduct.save(buildProductBis);
        build = new Build(jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"FINISHED","1234",repository,branch);
        build.setResultBuild("UNSTABLE");build.setBuildProduct(buildProductBis);
        rBuild.save(build);
        buildBis =new Build(jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"FINISHED","12345",repository,branch);
        buildBis.setResultBuild("FAILURE");buildBis.setBuildProduct(buildProductBis);
        rBuild.save(buildBis);
        deployPF = new DeployPF(buildProductBis,jenkinsUser,now,now.plusHours(2),"SUCCESS", DeployPFName.AIX_ENGIE_PF,"1.2.3.4,1.2.3.5","deploy-sics-test","0001");
        rDeployPF.save(deployPF);
        testIntegration = new TestIntegration(buildProductBis, TestIntegrationType.STIMPACK,now,now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0, DeployPFName.AIX_ENGIE_PF,"1.1.1.1");
        rTestIntegration.save(testIntegration);
        testIntegrationBis = new TestIntegration(buildProductBis, TestIntegrationType.STIMPACK,now,now.plusHours(2),"SUCCESS","FINISH","MACS_VEHICULE",10,10,0,0,0, DeployPFName.AIX_ENGIE_PF,"1.1.1.1");
        rTestIntegration.save(testIntegrationBis);
    }

    @BeforeEach
    void setupEach() {

    }


//////////////////////////////////////////////////////////////////////////////////////
//                               GET METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void getAllReportType() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/type")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(4)));

    }
    @Test
    public void getAllVersionForADefineProductAndReportBuild() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{reportType}/{modelProduct}", "BUILD",buildProduct.getProduct())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }
    @Test
    public void getAllVersionForADefineProductAndReporDeploy() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{reportType}/{modelProduct}", "DEPLOIEMENT",buildProduct.getProduct())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }
    @Test
    public void getAllVersionForADefineProductAndReportTest() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{reportType}/{modelProduct}", "TEST",buildProduct.getProduct())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }
    @Test
    public void getAllVersionForADefineProductAndReportWeather() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{reportType}/{modelProduct}", "METEO",buildProduct.getProduct())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }



    @Test
    public void getAllVersionForAProductNotExistAndReportWeather() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{reportType}/{modelProduct}", "METEO","NOTEXIST")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                is(0)));;
    }


    @Test
    public void getLastTenResumeReportForBuildAProduct() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/resume")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .param("product", "SICS"));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void getAReport() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{id}",buildProductBis.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAReport_notExist() throws Exception {
        long buildProductId = 999999L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/report/{id}",buildProductId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.value", is("BuildProduct with id:'"+buildProductId+"'not exist")))

                .andDo(print());
    }

}