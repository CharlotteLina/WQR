package net.atos.quality.controller.test;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.message.Message;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationType;
import net.atos.quality.service.test.STestIntegration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object TEST */
@RestController
@RequestMapping("production/testIntegration")
public class CTestIntegration {

    private STestIntegration STestIntegrationService;

    public CTestIntegration(STestIntegration STestIntegrationService) {
        this.STestIntegrationService = STestIntegrationService;
    }

    /*Creation d'un object Test
     * Args : - requiered - Test test       -> Object Test a crée
     * Return : Le test créé
     */
    @PostMapping
    @JsonView(value = { Views.TestIntegration.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createTest(@RequestBody TestIntegration test) {
        //Check if testProduit already exist
        String error = checkTest(test);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if testProduit already exist
        ResponseEntity<TestIntegration> b = getTestById(test.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("Test with id : " + test.getId() + " already exist","ERROR"));
        }
        //Create testProduit
        return ResponseEntity.created(URI.create("/production/test")).body(STestIntegrationService.saveTest(test));
    }

    /*Récupération de tous les test existants
     * Return : L'ensemble des test existant
     */
    @GetMapping
    @JsonView(value = { Views.TestIntegration.class})
    public List<TestIntegration> getAllTests() {
        return STestIntegrationService.getAllTests();
    }

    /*Récupération de tous les types de test existant
     * Return : L'ensemble des types de test
     */
    @GetMapping("type")
    @JsonView(value = { Views.TestIntegration.class})
    public List<String> getAllTestType() {
        return TestIntegrationType.getAllType();
    }

    /*Récupération d'un test par son ID
     * Args : - requiered - long testId       -> Id du test recherché
     * Return : Le test cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.TestIntegration.class})
    public ResponseEntity getTestById(@PathVariable("id") long testId) {
        Optional<TestIntegration> t =STestIntegrationService.getTestById(testId);
        if (t.isPresent()){
            return ResponseEntity.ok().body(t.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("TestIntegration not exist("+testId+")","NOTFOUND"));
        }

    }

    /*Mise a jour d'un test par son id
     * Args : - requiered - long testId       -> Id du test recherché
     * Args : - requiered - Test test         -> Les informations du test mis à jour
     * Return : Le test mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.TestIntegration.class})
    public ResponseEntity updateTest(@PathVariable("id") long testId, @RequestBody TestIntegration test) {
        Optional<TestIntegration> ti = STestIntegrationService.getTestById(testId);
        if(ti.isPresent()){
            TestIntegration savedTest = ti.get();
            if (test.getType() != null) {
                savedTest.setType(test.getType());
            }
            if (test.getStartDate() != null) {
                savedTest.setStartDate(test.getStartDate());
            }
            if (test.getEndDate() != null) {
                savedTest.setEndDate(test.getEndDate());
            }
            if (test.getResult() != null) {
                savedTest.setResult(test.getResult());
            }
            if (test.getStatus() != null) {
                savedTest.setStatus(test.getStatus());
            }
            if (test.getScenarioName() != null) {
                savedTest.setScenarioName(test.getScenarioName());
            }
            if (test.getNbTestTotal() != null) {
                savedTest.setNbTestTotal(test.getNbTestTotal());
            }
            if (test.getNbTestOk() != null) {
                savedTest.setNbTestOk(test.getNbTestOk());
            }
            if (test.getNbTestKo() != null) {
                savedTest.setNbTestKo(test.getNbTestKo());
            }
            if (test.getNbTestNa() != null) {
                savedTest.setNbTestNa(test.getNbTestNa());
            }
            if (test.getNbTestWarn() != null) {
                savedTest.setNbTestWarn(test.getNbTestWarn());
            }
            if (test.getBuildProduct() != null) {
                savedTest.setBuildProduct(test.getBuildProduct());
            }
            if (test.getRebuildFrom() != null) {
                savedTest.setRebuildFrom(test.getRebuildFrom());
            }
            if (test.getMachines() != null) {
                savedTest.setMachines(test.getMachines());
            }
            if (test.getPfName() != null) {
                savedTest.setPfName(test.getPfName());
            }
            return ResponseEntity.ok().body(STestIntegrationService.updateTest(savedTest));
        }else{
            return ResponseEntity.badRequest().body(new Message("TestIntegration not exist("+testId+")","NOTFOUND"));
        }


    }

    /*Suppression d'un test
     * Args : - requiered - long testId       -> Id du test a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteTest(@PathVariable("id") long testId) {
        Optional<TestIntegration> b = STestIntegrationService.getTestById(testId);
        if(b.isPresent()){
            STestIntegrationService.deleteTest(testId);
            return ResponseEntity.ok().body(new Message("TestIntegration deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("TestIntegration not exist.","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de Test
     * Args : - requiered - Test test        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkTest(TestIntegration test) {
        String error = "";
        TestIntegrationType testIntegrationType = test.getType();
        LocalDateTime testStartDate = test.getStartDate();
        String testResult = test.getResult();
        String testStatus = test.getStatus();
        String testScenarioName = test.getScenarioName();
        Integer testNbTestTotal = test.getNbTestTotal();
        Integer testNbTestOk = test.getNbTestOk();
        Integer testNbTestKo = test.getNbTestKo();
        Integer testNbTestNa = test.getNbTestNa();
        Integer testNbTestWarn = test.getNbTestWarn();
        BuildProduct testBuildProduct = test.getBuildProduct();
        DeployPFName testPfName = test.getPfName();
        String testMachines = test.getMachines();

        if (testIntegrationType == null) {
            error += "Missing field 'type', ";
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
            error += "Missing field 'nbTestWarn', ";
        }
        if (testPfName == null) {
            error += "Missing field 'pfName', ";
        }
        if (testMachines == null) {
            error += "Missing field 'machines', ";

        }
        if (testBuildProduct == null) {
            error += "Missing field 'buildProduct'";

        }
        return error;
    }
}