package net.atos.quality.controller.test;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.message.Message;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationDetail;
import net.atos.quality.service.test.STestIntegrationDetail;
import net.atos.quality.service.test.STestIntegration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object TEST INTEGRATION DETAIL */
@RestController
@RequestMapping("production/testIntegrationDetail")
public class CTestIntegrationDetail {

    private STestIntegrationDetail StestIntegrationDetail;
    private STestIntegration STestIntegration;

    public CTestIntegrationDetail(STestIntegrationDetail StestIntegrationDetail, STestIntegration STestIntegration) {
        this.StestIntegrationDetail = StestIntegrationDetail;
        this.STestIntegration = STestIntegration;
    }

    /*Creation d'un object TestDetails
     * Args : - requiered - TestDetails testDetails       -> Object TestDetails a crée
     * Return : Le testDetails créé
     */
    @PostMapping
    @JsonView(value = { Views.TestIntegrationDetail.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createTestIntegrationDetail(@RequestBody TestIntegrationDetail testIntegrationDetail) {
        //Check all arg of testIntegrationDetail
        String error = checkTestIntegrationDetail(testIntegrationDetail);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if testIntegrationDetail already exist
        ResponseEntity<TestIntegrationDetail> b = getTestIntegrationDetailById(testIntegrationDetail.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("TestIntegrationDetail with id : " + testIntegrationDetail.getId() + " already exist","INFORMATION"));
        }
        //Create testIntegrationDetail
        return ResponseEntity.created(URI.create("/production/testIntegrationDetail")).body(StestIntegrationDetail.saveTestIntegrationDetail(testIntegrationDetail));
    }

    /*Récupération de tous les testDetails existants
     * Return : L'ensemble des testDetails existant
     */
    @GetMapping
    @JsonView(value = { Views.TestIntegrationDetail.class})
    public List<TestIntegrationDetail> getAllTestIntegrationDetail() {
        return StestIntegrationDetail.getAllTestIntegrationDetail();
    }

    /*Récupération d'un testDetails par son ID
     * Args : - requiered - long testDetailsId       -> Id du testDetails recherché
     * Return : Le testDetails cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.TestIntegrationDetail.class})
    public ResponseEntity getTestIntegrationDetailById(@PathVariable("id") long testIntegrationDetailId) {
        Optional<TestIntegrationDetail> t = StestIntegrationDetail.getTestIntegrationDetailById(testIntegrationDetailId);
        if (t.isPresent()) {
            return ResponseEntity.ok().body(t.get());
        } else {
            return ResponseEntity.badRequest().body(new Message("TestIntegrationDetail not exist("+testIntegrationDetailId+")","NOTFOUND"));
        }
    }


    /*Mise a jour d'un testDetails par son id
     * Args : - requiered - long testDetailsId         -> Id du testDetails recherché
     * Args : - requiered - TestDetails testDetails    -> Les informations du testDetails mis à jour
     * Return : Le testDetails mis à jour
     */
    @PutMapping("{id}")
        @JsonView(value = { Views.TestIntegrationDetail.class})
    public ResponseEntity updateTestIntegrationDetail(@PathVariable("id") long testIntegrationDetailId, @RequestBody TestIntegrationDetail testIntegrationDetail) {
        Optional<TestIntegrationDetail> tid= StestIntegrationDetail.getTestIntegrationDetailById(testIntegrationDetailId);
        if (tid.isPresent()){
            TestIntegrationDetail savedTestIntegrationDetail = tid.get();
            if (testIntegrationDetail.getTestIntegration() != null) {
                savedTestIntegrationDetail.setTestIntegration(testIntegrationDetail.getTestIntegration());
            }
            if (testIntegrationDetail.getStartDate() != null) {
                savedTestIntegrationDetail.setStartDate(testIntegrationDetail.getStartDate());
            }
            if (testIntegrationDetail.getEndDate() != null) {
                savedTestIntegrationDetail.setEndDate(testIntegrationDetail.getEndDate());
            }
            if (testIntegrationDetail.getResult() != null) {
                savedTestIntegrationDetail.setResult(testIntegrationDetail.getResult());
            }
            if (testIntegrationDetail.getStatus() != null) {
                savedTestIntegrationDetail.setStatus(testIntegrationDetail.getStatus());
            }
            if (testIntegrationDetail.getScenarioName() != null) {
                savedTestIntegrationDetail.setScenarioName(testIntegrationDetail.getScenarioName());
            }
            if (testIntegrationDetail.getNbTestTotal() != null) {
                savedTestIntegrationDetail.setNbTestTotal(testIntegrationDetail.getNbTestTotal());
            }
            if (testIntegrationDetail.getNbTestOk() != null) {
                savedTestIntegrationDetail.setNbTestOk(testIntegrationDetail.getNbTestOk());
            }
            if (testIntegrationDetail.getNbTestKo() != null) {
                savedTestIntegrationDetail.setNbTestKo(testIntegrationDetail.getNbTestKo());
            }
            if (testIntegrationDetail.getNbTestNa() != null) {
                savedTestIntegrationDetail.setNbTestNa(testIntegrationDetail.getNbTestNa());
            }
            if (testIntegrationDetail.getNbTestWarn() != null) {
                savedTestIntegrationDetail.setNbTestWarn(testIntegrationDetail.getNbTestWarn());
            }
            if (testIntegrationDetail.getDetail() != null) {
                savedTestIntegrationDetail.setDetail(testIntegrationDetail.getDetail());
            }
            return ResponseEntity.ok().body(StestIntegrationDetail.updateTestIntegrationDetail(savedTestIntegrationDetail));
        }else{
            return ResponseEntity.badRequest().body(new Message("TestIntegrationDetail not exist("+testIntegrationDetailId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un testDetails
     * Args : - requiered - long testDetailsId       -> Id du testDetails a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteTestIntegrationDetail(@PathVariable("id") long testIntegrationDetailId) {

        Optional<TestIntegrationDetail> b = StestIntegrationDetail.getTestIntegrationDetailById(testIntegrationDetailId);
        if(b.isPresent()){
            StestIntegrationDetail.deleteTestIntegrationDetail(testIntegrationDetailId);
            return ResponseEntity.ok().body(new Message("TestIntegrationDetail deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("TestIntegrationDetail not exist.","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de TestDetails
     * Args : - requiered - TestDetails testDetails        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkTestIntegrationDetail(TestIntegrationDetail testIntegrationDetail) {
        String error = "";
        TestIntegration testIntegration = testIntegrationDetail.getTestIntegration();
        LocalDateTime testStartDate = testIntegrationDetail.getStartDate();
        String testResult = testIntegrationDetail.getResult();
        String testStatus = testIntegrationDetail.getStatus();
        String testScenarioName = testIntegrationDetail.getScenarioName();
        Integer testNbTestTotal = testIntegrationDetail.getNbTestTotal();
        Integer testNbTestOk = testIntegrationDetail.getNbTestOk();
        Integer testNbTestKo = testIntegrationDetail.getNbTestKo();
        Integer testNbTestNa = testIntegrationDetail.getNbTestNa();
        Integer testNbTestWarn = testIntegrationDetail.getNbTestWarn();

        if (testIntegration == null) {
            error += "Missing field 'testIntegration', ";
        }
        if (testStartDate == null) {
            error += "Missing field 'startDate', ";
        }
        if (testResult == null) {
            error += "Missing field 'result', ";
        }
        if (testStatus == null) {
            error += "Missing field 'status', ";
        }
        if (testScenarioName == null) {
            error += "Missing field 'scenarioName', ";
        }
        if (testNbTestTotal == null) {
            error += "Missing field 'nbTestTotal', ";
        }
        if (testNbTestOk == null) {
            error += "Missing field 'nbTestOk', ";
        }
        if (testNbTestKo == null) {
            error += "Missing field 'nbTestKo', ";
        }
        if (testNbTestNa == null) {
            error += "Missing field 'nbTestNa', ";
        }
        if (testNbTestWarn == null) {
            error += "Missing field 'nbTestWarn'";
        }


        return error;
    }
}
