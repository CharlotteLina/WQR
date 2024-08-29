package net.atos.quality.git;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.repository.git.RGitBranch;
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
public class TGitBranch {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RGitBranch rGitBranch;

    @Autowired
    private ObjectMapper objectMapper;

    private static GitBranch branchProduct;
    private static GitBranch branchProductNull;
    private static GitBranch branchProductUpdate;

//////////////////////////////////////////////////////////////////////////////////////
//                               SETUP                                              //
//////////////////////////////////////////////////////////////////////////////////////

    @BeforeEach
    void setupEach() {
        branchProduct = new GitBranch("test-develop");
        branchProductUpdate = new GitBranch("test-develop-test");
        branchProductNull = new GitBranch(1, null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
//                               POST METHOD                                        //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createGitBranch_isCreated() throws Exception {
        //PREPARE
        branchProduct = new GitBranch("TestGitBranch");

        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitBranch")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(branchProduct)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(branchProduct.getName())));

    }

    @Test
    public void createGitBranch_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitBranch")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(branchProductNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'name'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createGitBranch_idAlreadyExist() throws Exception {
        //PREPARE
        branchProduct = rGitBranch.save(branchProduct);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitBranch")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(branchProduct)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("GitBranch with id : " + branchProduct.getId() + " already exist")))
                .andExpect(status().isBadRequest());

    }

    @Test
    public void createGitBranch_whenBranchExistReturnBranch() throws Exception {
        //PREPARE
        GitBranch branch = new GitBranch("nameAlreadyExist");
        rGitBranch.save(branch);
        GitBranch newBranch = new GitBranch("nameAlreadyExist");

        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitBranch")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newBranch)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(branch.getName())));
    }



//////////////////////////////////////////////////////////////////////////////////////
//                               GET METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllGitBranch_isOk() throws Exception {
        //PREPARE
        List<GitBranch> listOfTests = rGitBranch.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitBranch")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getAGitBranch_isOk() throws Exception {
        //PREPARE
        branchProduct = rGitBranch.save(branchProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitBranch/{id}", branchProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(branchProduct.getName())));
    }

    @Test
    public void getAGitBranchByName_isOk() throws Exception {
        //PREPARE
        branchProduct = new GitBranch("TestGetByName");
        branchProduct = rGitBranch.save(branchProduct);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitBranch/name/{name}", branchProduct.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(branchProduct.getName())));
    }

    @Test
    public void getAGitBranchByName_isKo() throws Exception {
        //PREPARE
        branchProduct = new GitBranch("TestGetByNameNotExist");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitBranch/name/{name}", branchProduct.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }
    @Test
    public void getAGitBranch_isNotFound() throws Exception {
        //PREPARE
        long buildBranchId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitBranch/{id}", buildBranchId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    //////////////////////////////////////////////////////////////////////////////////////
//                            UPDATE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAGitBranch_isOk() throws Exception {
        //PREPARE
        branchProduct = rGitBranch.save(branchProduct);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/gitBranch/{id}", branchProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(branchProductUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(branchProductUpdate.getName())));

    }

    @Test
    public void updateAGitBranch_isNotFound() throws Exception {
        //PREPARE
        long buildBranchId = 1000L;
        rGitBranch.save(branchProduct);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/gitBranch/{id}", buildBranchId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(branchProductUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAGitBranch_isOk() throws Exception {
        //PREPARE
        rGitBranch.save(branchProduct);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/gitBranch/{id}", branchProduct.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteAGitBranch_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/gitBranch/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("GitBranch not exist.")))
                .andExpect(status().isBadRequest());
    }
}