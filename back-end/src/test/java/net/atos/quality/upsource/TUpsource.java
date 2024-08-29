package net.atos.quality.upsource;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.atos.quality.model.upsource.UpsourceCauseHistorique;
import net.atos.quality.model.upsource.UpsourceCauseJenkins;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.repository.upsource.RUpsourceCause;
import net.atos.quality.repository.upsource.RUpsourceCauseHistorique;
import net.atos.quality.repository.git.RGitBranch;
import net.atos.quality.repository.git.RGitRepository;
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
import java.util.ArrayList;
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
public class TUpsource {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;



    private LocalDateTime now;
    private GitRepository repository;
    private GitBranch branch;
    private DateTimeFormatter formatter;
    private UpsourceCause upsourceCause;
    private UpsourceCauseHistorique upsourceCauseHistorique;

    private UpsourceCause upsourceCauseBis;
    private UpsourceCauseHistorique upsourceCauseHistoriqueBis;
    @Autowired
    private RGitBranch rGitBranch;
    @Autowired
    private RGitRepository rGitRepository;
    @Autowired
    private RUpsourceCause rUpsourceCause;
    @Autowired
    private RUpsourceCauseHistorique rUpsourceCauseHistorique;

    //////////////////////////////////////////////////////////////////////////////////////
    //                               SETUP                                              //
    //////////////////////////////////////////////////////////////////////////////////////

    @BeforeAll
    public void setup() {
        //Prepare
        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        now = LocalDateTime.parse(LocalDateTime.now().format(formatter));

        repository = new GitRepository("TestUpsourceCause");
        rGitRepository.save(repository);
        branch = new GitBranch("testUpsourceCause");
        rGitBranch.save(branch);
        upsourceCause = new UpsourceCause(UpsourceCauseType.MISSING,"information","autor",now,branch,repository);
        upsourceCause = rUpsourceCause.save(upsourceCause);
        upsourceCauseHistorique = new UpsourceCauseHistorique("p-nom","","a-nom",now,upsourceCause);
        upsourceCauseHistorique = rUpsourceCauseHistorique.save(upsourceCauseHistorique);

        upsourceCauseBis = new UpsourceCause(UpsourceCauseType.MISSING,"informationBis","autorBis",now,branch,repository);
        upsourceCauseBis = rUpsourceCause.save(upsourceCauseBis);
        upsourceCauseHistoriqueBis = new UpsourceCauseHistorique("p-nom","","a-nom",now,upsourceCauseBis);
        upsourceCauseHistoriqueBis = rUpsourceCauseHistorique.save(upsourceCauseHistoriqueBis);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //                               POST METHOD                                        //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void createUpsourceCause_isCreated() throws Exception {
        UpsourceCause upc = new UpsourceCause(UpsourceCauseType.MISSING,"informationOldUPC","autorOld",now,branch,repository);
        upc = rUpsourceCause.save(upc);

        List<UpsourceCauseJenkins> listUpsourceCause = new ArrayList<>();
        listUpsourceCause.add(new UpsourceCauseJenkins(upsourceCause.getType().getLabel(),upsourceCause.getInformation(),upsourceCause.getAuthor(),now.plusHours(2), (int) branch.getId(), (int) repository.getId(),"p-nom","","a-nom"));
        listUpsourceCause.add(new UpsourceCauseJenkins(upsourceCause.getType().getLabel(),"newInfo","newAuthor",now, (int) branch.getId(), (int) repository.getId(),"p-nom","","a-nom"));
        listUpsourceCause.add(new UpsourceCauseJenkins(upsourceCauseBis.getType().getLabel(),upsourceCauseBis.getInformation(),upsourceCauseBis.getAuthor(),now.plusHours(2), (int) branch.getId(), (int) repository.getId(),"p-nom","new-nom","a-nom"));

        ResultActions response = mockMvc.perform(post("/production/upsourceCause")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(listUpsourceCause)));
        //ASSERT
        response.andDo(print())
                .andExpect(status().isOk());

    }

    @Test
    public void createUpsourceCause_isKo() throws Exception {
        List<UpsourceCauseJenkins> listUpsourceCause = new ArrayList<>();
        listUpsourceCause.add(new UpsourceCauseJenkins(null,null,null,null,(int) branch.getId(),(int) repository.getId(),null,null,null));

        ResultActions response = mockMvc.perform(post("/production/upsourceCause")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(listUpsourceCause)));
        //ASSERT
        response.andExpect(jsonPath("$.value", is("Missing field 'information', Missing field 'author', Missing field 'type', Missing field 'date', Missing field 'reviewerFinish', Missing field 'reviewerNotFinish'")))
                .andExpect(status().isBadRequest());


    }

    @Test
    public void createUpsourceCause_branchAndRepositoryNotExist() throws Exception {


        List<UpsourceCauseJenkins> listUpsourceCause = new ArrayList<>();
        listUpsourceCause.add(new UpsourceCauseJenkins(upsourceCause.getType().getLabel(),upsourceCause.getInformation(),upsourceCause.getAuthor(),now, 999999, 999999,"p-nom","","a-nom"));

        ResultActions response = mockMvc.perform(post("/production/upsourceCause")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes()))
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(listUpsourceCause)));
        //ASSERT
        response.andExpect(jsonPath("$.value", is("Branch or repository not exist")))
                .andExpect(status().isBadRequest());


    }





    //////////////////////////////////////////////////////////////////////////////////////
    //                               GET METHOD                                         //
    //////////////////////////////////////////////////////////////////////////////////////
    @Test
    public void getAllUpsourceCause_isOk() throws Exception {
        //PREPARE
        List<UpsourceCause> listOfUpsourceCause = rUpsourceCause.findAll();

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsourceCause")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(listOfUpsourceCause.size())));

    }

    @Test
    public void getAUpsourceCause_isOk() throws Exception {
        //PREPARE
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        UpsourceCause upsourceCausecreation = new UpsourceCause(UpsourceCauseType.MISSING,"informationCreation","autor",now,branch,repository);
        upsourceCausecreation = rUpsourceCause.save(upsourceCausecreation);


        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsourceCause/{id}", upsourceCausecreation.getId())
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.repository.id", is((int) upsourceCausecreation.getRepository().getId())))
                .andExpect(jsonPath("$.branch.id", is((int) upsourceCausecreation.getBranch().getId())))
                .andExpect(jsonPath("$.type", is(upsourceCausecreation.getType().getLabel())))
                .andExpect(jsonPath("$.information", is(upsourceCausecreation.getInformation())))
                .andExpect(jsonPath("$.author", is(upsourceCausecreation.getAuthor())))
                .andExpect(jsonPath("$.startDate", is(upsourceCausecreation.getStartDate().format(formatter))));
    }

    @Test
    public void getAUpsourceCause_isNotFound() throws Exception {
        //PREPARE
        long upsourceCauseId = 1000L;

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsourceCause/{id}", upsourceCauseId)
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isBadRequest())
                .andDo(print());
    }

    @Test
    public void getAllType() throws Exception {

        //ACT
        ResultActions response = mockMvc.perform(get("/production/upsourceCause/type")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString("admin:f&Ps7O52vMS6Ul7".getBytes())));

        //ASSERT
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(3)));

    }


}