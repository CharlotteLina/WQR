package net.atos.quality.build;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.build.BuildProductModel;
import net.atos.quality.model.build.BuildProductType;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.build.RBuildProduct;
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
public class TBuildProduct {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private RJenkinsUser rJenkinsUser;
    @Autowired
    private RBuildProduct rBuildProduct;
    @Autowired
    private ObjectMapper objectMapper;
    private JenkinsUser jenkinsUser;

    private static BuildProduct buildProduct;
    private static BuildProduct buildProductNull;
    private static BuildProduct buildProductUpdate;
    @Autowired
    private RGitBranch rGitBranch;

    private static GitBranch gitBranch;

    private LocalDateTime now;
    private DateTimeFormatter formatter;



    //////////////////////////////////////////////////////////////////////////////////////
    //                               SETUP                                              //
    //////////////////////////////////////////////////////////////////////////////////////
    @BeforeAll
    public void setup() {
        //Prepare
        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        now = LocalDateTime.parse(LocalDateTime.now().format(formatter));
        gitBranch = new GitBranch("developer");
        rGitBranch.save(gitBranch);
        jenkinsUser= new JenkinsUser("testJenkinsUser");
        rJenkinsUser.save(jenkinsUser);
    }

    @BeforeEach
    void setupEach() {
        buildProduct = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","SUCCESS","123", "PENDING", BuildProductType.LIBRARY,"version-123", BuildProductModel.SICS, gitBranch);
        buildProductUpdate = new BuildProduct(now, now.plusHours(2),jenkinsUser, "build-sics","FAILED", "124", "PENDING", BuildProductType.PROJECT,"version-124", BuildProductModel.SICSD, gitBranch);
        buildProductNull = new BuildProduct(1, null, null,null,null,null, null, null,null, null,null,null,null,null,null,null,null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createbuildProduct_isCreated() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildProduct")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildProduct)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.startDate", is(buildProduct.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(buildProduct.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.name", is(buildProduct.getName())))
                .andExpect(jsonPath("$.result", is(buildProduct.getResult())))
                .andExpect(jsonPath("$.jenkinsNumber", is(buildProduct.getJenkinsNumber())))
                .andExpect(jsonPath("$.status", is(buildProduct.getStatus())))
                .andExpect(jsonPath("$.typeProduct", is(buildProduct.getTypeProduct().getLabel())))
                .andExpect(jsonPath("$.version", is(buildProduct.getVersion())))
                .andExpect(jsonPath("$.product", is(buildProduct.getProduct().getName())))
                .andExpect(jsonPath("$.branch.id", is((int)buildProduct.getBranch().getId())));
    }

    @Test
    public void createbuildProduct_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildProduct")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildProductNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'startDate', Missing field 'jenkinsNumber', Missing field 'status', Missing field 'typeProduct', Missing field 'product', Missing field 'branch', Missing field 'name', Missing field 'result'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createbuildProduct_idAlreadyExist() throws Exception {
        //PREPARE
        buildProduct = rBuildProduct.save(buildProduct);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/buildProduct")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildProduct)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("BuildProduct with id : " + buildProduct.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllbuildProduct_isOk() throws Exception {
        //PREPARE
        List<BuildProduct> listOfBuildProduct = rBuildProduct.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfBuildProduct.size())));

    }

    @Test
    public void getAbuildProduct_isOk() throws Exception {
        //PREPARE
        buildProduct = rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/{id}", buildProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(buildProduct.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(buildProduct.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.name", is(buildProduct.getName())))
                .andExpect(jsonPath("$.result", is(buildProduct.getResult())))
                .andExpect(jsonPath("$.jenkinsNumber", is(buildProduct.getJenkinsNumber())))
                .andExpect(jsonPath("$.status", is(buildProduct.getStatus())))
                .andExpect(jsonPath("$.typeProduct", is(buildProduct.getTypeProduct().getLabel())))
                .andExpect(jsonPath("$.version", is(buildProduct.getVersion())))
                .andExpect(jsonPath("$.product", is(buildProduct.getProduct().getName())))
                .andExpect(jsonPath("$.branch.id", is((int)buildProduct.getBranch().getId())));
    }


    @Test
    public void getAbuildProduct_isNotFound() throws Exception {
        //PREPARE
        long buildProductId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/{id}", buildProductId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    @Test
    public void getAllType() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/type")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(3)));

    }


    @Test
    public void getAbuildProductByJenkins_isOk() throws Exception {
        //PREPARE
        buildProduct = new BuildProduct(now, now.plusHours(3), jenkinsUser,"build-sics","SUCCESS", "125", "PENDING", BuildProductType.LIBRARY,"version-125", BuildProductModel.SICS, gitBranch);
        buildProduct = rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/jenkins/{name}/{jenkins}",buildProduct.getName(), buildProduct.getJenkinsNumber())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.jenkinsNumber", is(buildProduct.getJenkinsNumber())));
    }

    @Test
    public void getAbuildProductByJenkins_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/jenkins/{name}/{jenkins}", "error","0")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    @Test
    public void getLastBuildProduct_isOk() throws Exception {
        //PREPARE
        buildProduct = new BuildProduct(now, now.plusHours(3), jenkinsUser,"build-sics","SUCCESS", "126", "PENDING", BuildProductType.LIBRARY,"version-126", BuildProductModel.SICS, gitBranch);
        buildProduct = rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/last/{product}",BuildProductModel.SICS.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getLastBuildProduct_isKo() throws Exception {
        //PREPARE

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/last/{product}","PRODUCTNOTEXIST")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.value", is("No build product for this product :PRODUCTNOTEXIST")))
                .andDo(print());
    }


    @Test
    public void getLastBuildProductAndBranch_isOk() throws Exception {
        //PREPARE
        buildProduct = new BuildProduct(now.minusHours(2), now.plusHours(8), jenkinsUser,"build-sics","SUCCESS", "127", "PENDING", BuildProductType.LIBRARY,"version-127", BuildProductModel.SICS, gitBranch);
        buildProduct = rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/last/{product}/{branch}",BuildProductModel.SICS.getName(),gitBranch.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getLastBuildProductAndBranch_isKo() throws Exception {
        //PREPARE

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/last/{product}/{branch}","PRODUCTNOTEXIST","NOTEXIST")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.value", is("Branch : NOTEXIST not exist")))
                .andDo(print());
    }

    @Test
    public void getLastBuildProductAndBranch_isKoNoProduct() throws Exception {
        //PREPARE

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/last/{product}/{branch}","PRODUCTNOTEXIST",gitBranch.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.value", is("No build product for this product :PRODUCTNOTEXIST and this branch :"+gitBranch.getName())))
                .andDo(print());
    }


    @Test
    public void getAllBuildProductModel() throws Exception {
        //PREPARE
        long buildId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/model", buildId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(BuildProductModel.getAllModel().size())));

    }


    @Test
    public void getAbuildProductByVersionAndProduct_isOk() throws Exception {
        rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/{product}/{version}", buildProduct.getProduct().getName(),buildProduct.getVersion())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAbuildProductByVersionAndProduct_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/buildProduct/{product}/{version}", "SICS","NOVERSION")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("BuildProduct not exist with version 'NOVERSION' and product 'SICS'")))
                .andExpect(status().isBadRequest());
    }
    //////////////////////////////////////////////////////////////////////////////////////
    //                            UPDATE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAbuildProduct_isOk() throws Exception {
        //PREPARE
        BuildProduct buildParent = new BuildProduct(now, now.plusHours(3), jenkinsUser,"build-com","SUCCESS", "128", "PENDING", BuildProductType.LIBRARY,"version-128", BuildProductModel.SICS, gitBranch);
        buildParent = rBuildProduct.save(buildParent);
        BuildProduct rebuildBuildProduct = new BuildProduct(now, now.plusHours(3), jenkinsUser,"build-sics","SUCCESS", "129", "PENDING", BuildProductType.LIBRARY,"version-129", BuildProductModel.SICS, gitBranch);
        rebuildBuildProduct = rBuildProduct.save(rebuildBuildProduct);

        buildProductUpdate.setBuildProductParent(buildParent);
        buildProductUpdate.setRebuildFrom(rebuildBuildProduct);
        buildProduct = rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/buildProduct/{id}", buildProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildProductUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.startDate", is(buildProductUpdate.getStartDate().format(formatter))))
                .andExpect(jsonPath("$.endDate", is(buildProductUpdate.getEndDate().format(formatter))))
                .andExpect(jsonPath("$.name", is(buildProductUpdate.getName())))
                .andExpect(jsonPath("$.result", is(buildProductUpdate.getResult())))
                .andExpect(jsonPath("$.jenkinsNumber", is(buildProductUpdate.getJenkinsNumber())))
                .andExpect(jsonPath("$.status", is(buildProductUpdate.getStatus())))
                .andExpect(jsonPath("$.typeProduct", is(buildProductUpdate.getTypeProduct().getLabel())))
                .andExpect(jsonPath("$.version", is(buildProductUpdate.getVersion())))
                .andExpect(jsonPath("$.product", is(buildProductUpdate.getProduct().getName())))
                .andExpect(jsonPath("$.branch.id", is((int)buildProductUpdate.getBranch().getId())));

    }

    @Test
    public void updateAbuildProduct_isNotFound() throws Exception {
        //PREPARE
        long buildProductId = 1000L;
        rBuildProduct.save(buildProduct);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/buildProduct/{id}", buildProductId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(buildProductUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    //////////////////////////////////////////////////////////////////////////////////////
    //                            DELETE METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAbuildProduct_isOk() throws Exception {
        //PREPARE
        rBuildProduct.save(buildProduct);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/buildProduct/{id}", buildProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteABuildProduct_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/buildProduct/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("BuildProduct not exist.")))
                .andExpect(status().isBadRequest());
    }
}