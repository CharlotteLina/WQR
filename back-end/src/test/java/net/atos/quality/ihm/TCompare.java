package net.atos.quality.ihm;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationType;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.build.RBuild;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.deploy.RDeployPF;
import net.atos.quality.repository.git.RGitBranch;
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
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TCompare {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    private static Build build;
    private static Build buildBis;

    private JenkinsUser jenkinsUser;

    private LocalDateTime now;
    private GitRepository repository;
    private GitRepository repositoryBis;

    private BuildProduct buildProduct;
    private BuildProduct buildProductBis;

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
        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        now = LocalDateTime.parse(LocalDateTime.now().format(formatter));
        jenkinsUser= new JenkinsUser("testJenkinsUser");
        rJenkinsUser.save(jenkinsUser);
        repository = new GitRepository("TestComparaison");
        rGitRepository.save(repository);
        repositoryBis = new GitRepository("TestComparaisonBis");
        rGitRepository.save(repositoryBis);
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
        buildBis =new Build(jenkinsUser,now,now.plusHours(3),BuildType.MAVEN,"FINISHED","12345",repositoryBis,branch);
        buildBis.setResultBuild("FAILURE");buildBis.setBuildProduct(buildProductBis);
        rBuild.save(buildBis);
    }



//////////////////////////////////////////////////////////////////////////////////////
//                               GET METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////


    @Test
    public void getABuildCompareOnWeeklyPeriod_isOk() throws Exception {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/compare/{product}/{type}", BuildProductModel.SICS,"BUILD")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .header("startDate",now.minusHours(2).format(formatter))
                .header("endDate",now.plusHours(24).format(formatter))

        );

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getABuildCompareDetail_isOk() throws Exception {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        String allBuildProduct= String.valueOf(buildProduct.getId())+','+String.valueOf(buildProductBis.getId());

        //ACT
        ResultActions response = mockMvc.perform(get("/production/compare/repository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .header("startDate",now.minusHours(2).format(formatter))
                .header("endDate",now.plusHours(24).format(formatter))
                .header("name",build.getRepository().getName())
                .header("buildProducts",allBuildProduct)

        );

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void getABuildCompareOnMonthPeriod_isOk() throws Exception {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/compare/{product}/{type}", BuildProductModel.SICS,"BUILD")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .header("startDate",now.minusMonths(3).format(formatter))
                .header("endDate",now.plusHours(24).format(formatter))

        );

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void getABuildCompareNotBuildOnPeriod() throws Exception {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/compare/{product}/{type}", BuildProductModel.SICS,"BUILD")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .header("startDate",now.minusMonths(3).format(formatter))
                .header("endDate",now.minusMonths(2).format(formatter))

        );

        //ASSERT
        response.andExpect(status().isOk())
                .andExpect(jsonPath("$.value", is("Aucun build de produit trouvé sur la période")))
                .andDo(print());
    }

}