package net.atos.quality.deploy;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.message.Message;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
import net.atos.quality.repository.git.RGitRepository;
import net.atos.quality.repository.deploy.RDeployPF;
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
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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
public class TDeployPF {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RDeployPF rDeployPF;
    @Autowired
    private ObjectMapper objectMapper;

    private static DeployPF deployPF;
    private static DeployPF deployPFNull;
    private static DeployPF deployPFUpdate;

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
        deployPF = new DeployPF(buildProduct,jenkinsUser,now,now.plusHours(2),"SUCCESS",DeployPFName.AIX_ENGIE_PF,"1.2.3.4,1.2.3.5","deploy-sics-test","0001");
        deployPFUpdate = new DeployPF(buildProduct,jenkinsUser,now,now.plusHours(2),"FAILURE",DeployPFName.AIX_SICS_PF_DEV,"1.2.3.4,1.2.3.5","deploy-sics-test","0002");
        deployPFNull = new DeployPF(1, null,null, null, null, null, null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createDeployPF_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPF")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPF)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.startDate", is(deployPF.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(deployPF.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPF.getResult())))
                .andExpect(jsonPath("$.buildProduct.id", is((int)deployPF.getBuildProduct().getId())))
                .andExpect(jsonPath("$.machines", is(deployPF.getMachines())))
                .andExpect(jsonPath("$.name", is(deployPF.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPF.getJenkinsNumber())))
                .andExpect(jsonPath("$.pfName", is(deployPF.getPfName().getName())));

    }

    @Test
    public void createDeployPF_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPF")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'result', Missing field 'pfName', Missing field 'startDate', Missing field 'machines', Missing field 'name', Missing field 'jenkinsNumber', Missing field 'buildProduct'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createDeployPF_idAlreadyExist() throws Exception {
        //PREPARE
        deployPF = rDeployPF.save(deployPF);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/deployPF")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPF)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("DeployPF with id : " + deployPF.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllDeployPF_isOk() throws Exception {
        //PREPARE
        List<DeployPF> listOfTests = rDeployPF.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getADeployPF_isOk() throws Exception {
        //PREPARE
        deployPF = rDeployPF.save(deployPF);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF/{id}", deployPF.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(deployPF.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(deployPF.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPF.getResult())))
                .andExpect(jsonPath("$.buildProduct.id", is((int)deployPF.getBuildProduct().getId())))
                .andExpect(jsonPath("$.machines", is(deployPF.getMachines())))
                .andExpect(jsonPath("$.name", is(deployPF.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPF.getJenkinsNumber())))
                .andExpect(jsonPath("$.pfName", is(deployPF.getPfName().getName())));
    }


    @Test
    public void getADeployPF_isNotFound() throws Exception {
        //PREPARE
        long deployPFId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF/{id}", deployPFId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    @Test
    public void getAllPFName() throws Exception {
        //PREPARE
        long buildId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF/name", buildId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(3)));

    }


    @Test
    public void getDeployPFByJenkinsNumberAndName_isOk() throws Exception {

        //PREPARE
        deployPF = new DeployPF(buildProduct,jenkinsUser,now,now.plusHours(2),"SUCCESS",DeployPFName.AIX_ENGIE_PF,"1.2.3.4,1.2.3.5","deploy-sics-test-by-jenkins","0001");
        rDeployPF.save(deployPF);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF/jenkins/{name}/{jenkinsNumber}", deployPF.getName(),deployPF.getJenkinsNumber())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());

    }

    @Test
    public void getDeployPFByJenkinsNumberAndName_isKo() throws Exception {


        //ACT
        ResultActions response = mockMvc.perform(get("/production/deployPF/jenkins/{name}/{jenkinsNumber}", "deploy-not-exist","0000")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("DeployPF not exist for jenkinsNumber '0000' and name 'deploy-not-exist'")))
                .andExpect(status().isBadRequest());

    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateADeployPF_isOk() throws Exception {
        //PREPARE
        deployPF = rDeployPF.save(deployPF);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/deployPF/{id}", deployPF.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(deployPFUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(deployPFUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.result", is(deployPFUpdate.getResult())))
                .andExpect(jsonPath("$.buildProduct.id", is((int)deployPFUpdate.getBuildProduct().getId())))
                .andExpect(jsonPath("$.machines", is(deployPFUpdate.getMachines())))
                .andExpect(jsonPath("$.name", is(deployPFUpdate.getName())))
                .andExpect(jsonPath("$.jenkinsNumber", is(deployPFUpdate.getJenkinsNumber())))
                .andExpect(jsonPath("$.pfName", is(deployPFUpdate.getPfName().getName())));
    }

    @Test
    public void updateADeployPF_isNotFound() throws Exception {
        //PREPARE
        long deployPFId = 1000L;
        rDeployPF.save(deployPF);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/deployPF/{id}", deployPFId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deployPFUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                            DELETE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteADeployPF_isOk() throws Exception {
        //PREPARE
        rDeployPF.save(deployPF);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/deployPF/{id}", deployPF.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteADeployPF_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/deployPF/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("DeployPF not exist.")))
                .andExpect(status().isBadRequest());
    }
}