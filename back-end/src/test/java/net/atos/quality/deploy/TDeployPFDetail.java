package net.atos.quality.deploy;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFDetail;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.deploy.RDeployPF;
import net.atos.quality.repository.deploy.RDeployPFDetail;
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
public class TDeployPFDetail {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RDeployPFDetail rDeployPFDetail;
    @Autowired
    private ObjectMapper objectMapper;

    private static DeployPFDetail deployPFDetail;
    private static DeployPFDetail deployPFDetailNull;
    private static DeployPFDetail deployPFDetailUpdate;

    private LocalDateTime now;
    private DateTimeFormatter formatter;

    private JenkinsUser jenkinsUser;
    private DeployPF deployPF;
    private GitRepository repository;
    private BuildProduct buildProduct;
    private GitBranch branch;
    private UpsourceCause upsourceCause;

    @Autowired
    private RJenkinsUser rJenkinsUser;
    @Autowired
    private RDeployPF rDeployPF;
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
        buildProduct = new BuildProduct(now, now.plusHours(2), jenkinsUser,"build-sics","SUCCESS", "123", "PENDING", BuildProductType.LIBRARY,"version-123", BuildProductModel.SICS,branch);
        rBuildProduct.save(buildProduct);
        deployPF = new DeployPF(buildProduct,jenkinsUser,now,now.plusHours(2),"SUCCESS",DeployPFName.AIX_ENGIE_PF,"1.2.3.4,1.2.3.5","deploy-sicsa","12347");
        rDeployPF.save(deployPF);

    }

    @BeforeEach
    void setupEach() {
        deployPFDetail = new DeployPFDetail(deployPF,jenkinsUser,"produit-deploy","1.2.3.4",now,"UNKNOWN",null,"1234");
        deployPFDetailUpdate = new DeployPFDetail(deployPF,jenkinsUser,"produit-deploy","1.2.3.5",now,now.plusHours(2),"SUCCESS","N/A","1234");
        deployPFDetailNull = new DeployPFDetail(1,null,null,null,null,null,null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createDeployPFDetail_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPFDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFDetail)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.startDate", is(deployPFDetail.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPFDetail.getResult())))
                .andExpect(jsonPath("$.machines", is(deployPFDetail.getMachines())))
                .andExpect(jsonPath("$.deployPF.id", is((int)deployPFDetail.getDeployPF().getId())))
                .andExpect(jsonPath("$.name", is(deployPFDetail.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPFDetail.getJenkinsNumber())));

    }

    @Test
    public void createDeployPFDetail_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPFDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFDetailNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'machines', Missing field 'result', Missing field 'startDate', Missing field 'name', Missing field 'jenkinsNumber', Missing field 'deployPF'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createDeployPFDetail_idAlreadyExist() throws Exception {
        //PREPARE
        deployPFDetail = rDeployPFDetail.save(deployPFDetail);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPFDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFDetail)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("DeployPFDetail with id : " + deployPFDetail.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllDeployPFDetail_isOk() throws Exception {
        //PREPARE
        List<DeployPFDetail> listOfTests = rDeployPFDetail.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPFDetail")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getADeployPFDetail_isOk() throws Exception {
        //PREPARE
        deployPFDetail = rDeployPFDetail.save(deployPFDetail);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPFDetail/{id}", deployPFDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(deployPFDetail.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPFDetail.getResult())))
                .andExpect(jsonPath("$.machines", is(deployPFDetail.getMachines())))
                .andExpect(jsonPath("$.deployPF.id", is((int)deployPFDetail.getDeployPF().getId())))
                .andExpect(jsonPath("$.name", is(deployPFDetail.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPFDetail.getJenkinsNumber())));
    }


    @Test
    public void getADeployPFDetail_isNotFound() throws Exception {
        //PREPARE
        long deployPFDetailId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPFDetail/{id}", deployPFDetailId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }


    @Test
    public void getADeployPFDetail_ByJenkinsAndName_isOk() throws Exception {
        //PREPARE
        deployPFDetail = new DeployPFDetail(deployPF,jenkinsUser,"produit-test-deploy","1.2.3.4",now,"UNKNOWN",null,"0001");
        rDeployPFDetail.save(deployPFDetail);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPFDetail/jenkins/{name}/{jenkinsNumber}", deployPFDetail.getName(),deployPFDetail.getJenkinsNumber())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getADeployPFDetail_ByJenkinsAndName_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPFDetail/jenkins/{name}/{jenkinsNumber}","nameNotExist","99999999999")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(jsonPath("$.value",is("DeployPFDetail not exist for jenkinsNumber '99999999999' and name 'nameNotExist'")))
                .andExpect(status().isBadRequest());
    }
    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateADeployPFDetail_isOk() throws Exception {
        //PREPARE
        DeployPFDetail deployPFDetailRebuild = new DeployPFDetail(deployPF,jenkinsUser,"produit-deploy","1.2.3.4",now,"UNKNOWN",null,"12345");
        deployPFDetailRebuild = rDeployPFDetail.save(deployPFDetailRebuild);

        deployPFDetailUpdate.setRebuildFrom(deployPFDetailRebuild);
        deployPFDetail = rDeployPFDetail.save(deployPFDetail);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/deployPFDetail/{id}", deployPFDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFDetailUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(deployPFDetailUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(deployPFDetailUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPFDetailUpdate.getResult())))
                .andExpect(jsonPath("$.machines", is(deployPFDetailUpdate.getMachines())))
                .andExpect(jsonPath("$.cause", is(deployPFDetailUpdate.getCause())))
                .andExpect(jsonPath("$.deployPF.id", is((int)deployPFDetailUpdate.getDeployPF().getId())))
                .andExpect(jsonPath("$.name", is(deployPFDetailUpdate.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPFDetailUpdate.getJenkinsNumber())));
    }

    @Test
    public void updateADeployPFDetail_isNotFound() throws Exception {
        //PREPARE
        long deployPFDetailId = 1000L;
        rDeployPFDetail.save(deployPFDetail);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/deployPFDetail/{id}", deployPFDetailId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFDetailUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            DELETE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteADeployPFDetail_isOk() throws Exception {
        //PREPARE
        rDeployPFDetail.save(deployPFDetail);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/deployPFDetail/{id}", deployPFDetail.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteADeployPFDetail_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/deployPFDetail/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("DeployPFDetail not exist.")))
                .andExpect(status().isBadRequest());
    }
}