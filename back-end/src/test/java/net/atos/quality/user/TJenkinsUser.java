package net.atos.quality.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.user.RJenkinsUser;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TJenkinsUser {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RJenkinsUser rJenkinsUser;

    @Autowired
    private ObjectMapper objectMapper;

    private static JenkinsUser jenkinsUser;
    private static JenkinsUser jenkinsUserNull;
    private static JenkinsUser jenkinsUserUpdate;

//////////////////////////////////////////////////////////////////////////////////////
//                               SETUP                                              //
//////////////////////////////////////////////////////////////////////////////////////

    @BeforeEach
    void setupEach() {
        jenkinsUser = new JenkinsUser("test-name");
        jenkinsUserUpdate = new JenkinsUser("test-develop-name");
        jenkinsUserNull = new JenkinsUser(1, null);
    }


    //////////////////////////////////////////////////////////////////////////////////////
//                               POST METHOD                                        //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createJenkinsUser_isCreated() throws Exception {
        //PREPARE
        jenkinsUser = new JenkinsUser("CreateTestJenkinsUser");

        //ACT
        ResultActions response = mockMvc.perform(post("/production/jenkinsUser")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUser)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(jenkinsUser.getName())));

    }

    @Test
    public void createJenkinsUser_missingField() throws Exception {
        //ACT
        ResultActions response = mockMvc.perform(post("/production/jenkinsUser")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUserNull)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("Missing field 'name'")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createJenkinsUser_idAlreadyExist() throws Exception {
        //PREPARE
        jenkinsUser = rJenkinsUser.save(jenkinsUser);
        //ACT
        ResultActions response = mockMvc.perform(post("/production/jenkinsUser")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUser)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value",is("JenkinsUser with id : " + jenkinsUser.getId() + " already exist")))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void createJenkinsUser_nameAlreadyExist() throws Exception {
        //PREPARE
        jenkinsUser = rJenkinsUser.save(new JenkinsUser("testNameAlreadyExist"));
        jenkinsUser = new JenkinsUser(jenkinsUser.getName());
        //ACT
        ResultActions response = mockMvc.perform(post("/production/jenkinsUser")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUser)));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.name", is(jenkinsUser.getName())))
                .andExpect(status().isOk());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                               GET METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllJenkinsUser_isOk() throws Exception {
        //PREPARE
        List<JenkinsUser> listOfTests = rJenkinsUser.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/jenkinsUser")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfTests.size())));

    }

    @Test
    public void getAJenkinsUser_isOk() throws Exception {
        //PREPARE
        jenkinsUser = rJenkinsUser.save(jenkinsUser);

        //ACT
        ResultActions response = mockMvc.perform(get("/production/jenkinsUser/{id}", jenkinsUser.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(jenkinsUser.getName())));
    }


    @Test
    public void getAJenkinsUser_isNotFound() throws Exception {
        //PREPARE
        long jenkinsUserId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/jenkinsUser/{id}", jenkinsUserId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());

    }

    //////////////////////////////////////////////////////////////////////////////////////
//                            UPDATE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void updateAJenkinsUser_isOk() throws Exception {
        //PREPARE
        jenkinsUser = rJenkinsUser.save(jenkinsUser);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/jenkinsUser/{id}", jenkinsUser.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUserUpdate)));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.name", is(jenkinsUserUpdate.getName())));

    }

    @Test
    public void updateAJenkinsUser_isNotFound() throws Exception {
        //PREPARE
        long jenkinsUserId = 1000L;
        rJenkinsUser.save(jenkinsUser);

        //ACT
        ResultActions response = mockMvc.perform(put("/production/jenkinsUser/{id}", jenkinsUserId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jenkinsUserUpdate)));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }


//////////////////////////////////////////////////////////////////////////////////////
//                            DELETE METHOD                                         //
//////////////////////////////////////////////////////////////////////////////////////

    @Test
    public void deleteAJenkinsUser_isOk() throws Exception {
        //PREPARE
        rJenkinsUser.save(jenkinsUser);
        //ACT
        ResultActions response = mockMvc.perform(delete("/production/jenkinsUser/{id}", jenkinsUser.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void deleteAJenkinsUser_isKo() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(delete("/production/jenkinsUser/{id}", 30000)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
        //ASSERT
        response.andDo(print())
                .andExpect(jsonPath("$.value", is("JenkinsUser not exist.")))
                .andExpect(status().isBadRequest());
    }
}