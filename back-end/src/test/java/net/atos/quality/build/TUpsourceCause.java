package net.atos.quality.build;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.repository.upsource.RUpsourceCause;
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
public class TUpsourceCause {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private RUpsourceCause rUpsourceCause;
    @Autowired
    private ObjectMapper objectMapper;

    private static UpsourceCause upsourceCause;
    private static UpsourceCause upsourceCauseNull;
    private static UpsourceCause upsourceCauseUpdate;



    //////////////////////////////////////////////////////////////////////////////////////
    //                               SETUP                                              //
    //////////////////////////////////////////////////////////////////////////////////////
//
//    @BeforeEach
//    void setupEach() {
//        upsourceCause = new UpsourceCause(UpsourceCauseType.MISSING,"issue 1234 - blabla","nomPrenom");
//        upsourceCauseUpdate = new UpsourceCause(UpsourceCauseType.NOTCLOSED,"issue 1236 - blabla ","nomPrenm");
//        upsourceCauseNull = new UpsourceCause(1, null, null,null);
//    }
//
//
//    //////////////////////////////////////////////////////////////////////////////////////
//    //                               POST METHOD                                        //
//    //////////////////////////////////////////////////////////////////////////////////////
//    @Test
//    public void createUpsourceCause_isCreated() throws Exception {
//        upsourceCause = new UpsourceCause(UpsourceCauseType.MISSING,"Test creation OK","nomTest prenomTest");
//
//        //ACT
//        ResultActions response = mockMvc.perform(post("/production/upsourceCause")
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(upsourceCause)));
//        //ASSERT
//        response.andDo(print())
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.type", is(upsourceCause.getType().getLabel())))
//                .andExpect(jsonPath("$.information", is(upsourceCause.getInformation())))
//                .andExpect(jsonPath("$.author", is(upsourceCause.getAuthor())));
//
//    }
//
//    @Test
//    public void createUpsourceCause_missingField() throws Exception {
//        //ACT
//        ResultActions response = mockMvc.perform(post("/production/upsourceCause")
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(upsourceCauseNull)));
//        //ASSERT
//        response.andDo(print())
//                .andExpect(jsonPath("$.value",is("Missing field 'information', Missing field 'author', Missing field 'type'")))
//                .andExpect(status().isBadRequest());
//    }
//
//
//
//    //////////////////////////////////////////////////////////////////////////////////////
//    //                               GET METHOD                                         //
//    //////////////////////////////////////////////////////////////////////////////////////
//    @Test
//    public void getAllUpsourceCause_isOk() throws Exception {
//        //PREPARE
//        List<UpsourceCause> listOfUpsourceCause = rUpsourceCause.findAll();
//
//        //ACT
//        ResultActions response = mockMvc.perform(get("/production/upsourceCause")
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//
//        //ASSERT
//        response.andExpect(status().isOk())
//                .andDo(print())
//                .andExpect(jsonPath("$.size()",
//                        is(listOfUpsourceCause.size())));
//
//    }
//
//    @Test
//    public void getAUpsourceCause_isOk() throws Exception {
//        //PREPARE
//        upsourceCause = rUpsourceCause.save(upsourceCause);
//
//        //ACT
//        ResultActions response = mockMvc.perform(get("/production/upsourceCause/{id}", upsourceCause.getId())
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//
//        //ASSERT
//        response.andExpect(status().isOk())
//                .andDo(print())
//                .andExpect(jsonPath("$.type", is(upsourceCause.getType().getLabel())))
//                .andExpect(jsonPath("$.information", is(upsourceCause.getInformation())))
//                .andExpect(jsonPath("$.author", is(upsourceCause.getAuthor())));
//    }
//
//    @Test
//    public void getAUpsourceCause_isNotFound() throws Exception {
//        //PREPARE
//        long upsourceCauseId = 1000L;
//
//        //ACT
//        ResultActions response = mockMvc.perform(get("/production/upsourceCause/{id}", upsourceCauseId)
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//
//        //ASSERT
//        response.andExpect(status().isBadRequest())
//                .andDo(print());
//
//    }
//
//    @Test
//    public void getAllType() throws Exception {
//
//        //ACT
//        ResultActions response = mockMvc.perform(get("/production/upsourceCause/type")
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//
//        //ASSERT
//        response.andExpect(status().isOk())
//                .andDo(print())
//                .andExpect(jsonPath("$.size()",
//                        is(2)));
//
//    }
//
//
//    //////////////////////////////////////////////////////////////////////////////////////
//    //                            UPDATE METHOD                                         //
//    //////////////////////////////////////////////////////////////////////////////////////
//    @Test
//    public void updateAUpsourceCause_isOk() throws Exception {
//        //PREPARE
//        upsourceCause = rUpsourceCause.save(upsourceCause);
//
//        //ACT
//        ResultActions response = mockMvc.perform(put("/production/upsourceCause/{id}", upsourceCause.getId())
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(upsourceCauseUpdate)));
//
//        //ASSERT
//        response.andExpect(status().isOk())
//                .andDo(print())
//                .andExpect(jsonPath("$.type", is(upsourceCauseUpdate.getType().getLabel())))
//                .andExpect(jsonPath("$.information", is(upsourceCauseUpdate.getInformation())))
//                .andExpect(jsonPath("$.author", is(upsourceCauseUpdate.getAuthor())));
//    }
//
//    @Test
//    public void updateAUpsourceCauseUpdate_isNotFound() throws Exception {
//        //PREPARE
//        long upsourceCauseId = 1000L;
//        rUpsourceCause.save(upsourceCause);
//
//        //ACT
//        ResultActions response = mockMvc.perform(put("/production/upsourceCause/{id}", upsourceCauseId)
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(upsourceCauseUpdate)));
//
//        //ASSERT
//        response.andExpect(status().isBadRequest())
//                .andDo(print());
//    }
//
//
////////////////////////////////////////////////////////////////////////////////////////
////                            DELETE METHOD                                         //
////////////////////////////////////////////////////////////////////////////////////////
//
//    @Test
//    public void deleteAUpsourceCause_isOk() throws Exception {
//        //PREPARE
//        rUpsourceCause.save(upsourceCause);
//        //ACT
//        ResultActions response = mockMvc.perform(delete("/production/upsourceCause/{id}", upsourceCause.getId())
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//        //ASSERT
//        response.andExpect(status().isOk())
//                .andDo(print());
//    }
//
//    @Test
//    public void deleteUpsourceCause_isKo() throws Exception {
//
//        //ACT
//        ResultActions response = mockMvc.perform(delete("/production/upsourceCause/{id}", 30000)
//                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));
//        //ASSERT
//        response.andDo(print())
//                .andExpect(jsonPath("$.value", is("UpsourceCause not exist.")))
//                .andExpect(status().isBadRequest());
//    }
}