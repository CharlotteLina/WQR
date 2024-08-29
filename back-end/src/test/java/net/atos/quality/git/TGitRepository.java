package net.atos.quality.git;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.repository.git.RGitRepository;
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
public class TGitRepository {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RGitRepository rGitRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private static GitRepository repository;
    private static GitRepository repositoryNull;
    private static GitRepository repositoryUpdate;

//////////////////////////////////////////////////////////////////////////////////////
//                               SETUP                                              //
//////////////////////////////////////////////////////////////////////////////////////

    @BeforeEach
    void setupEach() {
        repository = new GitRepository("test-develop");
        repositoryUpdate = new GitRepository("test-develop-test");
        repositoryNull = new GitRepository(1, null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
//                               POST METHOD                                        //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createGitRepository_isCreated() throws Exception {
        //PREPARE
        repository = new GitRepository("TestGitRepository");

        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitRepository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repository)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(repository.getName())));

    }

    @Test
    public void createGitRepository_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitRepository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repositoryNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'name'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createGitRepository_idAlreadyExist() throws Exception {
        //PREPARE
        repository = rGitRepository.save(repository);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitRepository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repository)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("GitRepository with id : " + repository.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createGitRepository_nameAlreadyExist() throws Exception {
        //PREPARE
        repository = rGitRepository.save(new GitRepository("testNameAlreadyExist"));
        repository = new GitRepository(repository.getName());
        //ACT
        ResultActions response = mockMvc.perform(post("/production/gitRepository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repository)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.name", is(repository.getName())))
                .andExpect(status().isOk());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                               GET METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllGitRepository_isOk() throws Exception {
        //PREPARE
        List<GitRepository> listOfTests = rGitRepository.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitRepository")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getAGitRepository_isOk() throws Exception {
        //PREPARE
        repository = rGitRepository.save(repository);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitRepository/{id}", repository.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(repository.getName())));
    }

    @Test
    public void getAGitRepositoryByName_isOk() throws Exception {
        //PREPARE
        repository = new GitRepository("TestGetByName");
        repository = rGitRepository.save(repository);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitRepository/name/{name}", repository.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(repository.getName())));
    }

    @Test
    public void getAGitRepositoryByName_isKo() throws Exception {
        //PREPARE
        repository = new GitRepository("TestGetByNameNotExist");

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitRepository/name/{name}", repository.getName())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }
    @Test
    public void getAGitRepository_isNotFound() throws Exception {
        //PREPARE
        long GitRepositoryId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/gitRepository/{id}", GitRepositoryId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    //////////////////////////////////////////////////////////////////////////////////////
//                            UPDATE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAGitRepository_isOk() throws Exception {
        //PREPARE
        repository = rGitRepository.save(repository);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/gitRepository/{id}", repository.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repositoryUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(repositoryUpdate.getName())));

    }

    @Test
    public void updateAGitRepository_isNotFound() throws Exception {
        //PREPARE
        long GitRepositoryId = 1000L;
        rGitRepository.save(repository);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/gitRepository/{id}", GitRepositoryId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(repositoryUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAGitRepository_isOk() throws Exception {
        //PREPARE
        rGitRepository.save(repository);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/gitRepository/{id}", repository.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteAGitRepository_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/gitRepository/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("GitRepository not exist.")))
                .andExpect(status().isBadRequest());
    }
}