package net.atos.quality.controller.build;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.build.SBuildProduct;
import net.atos.quality.service.build.SBuildUnitTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.atos.quality.service.build.SBuild;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object BUILD */
@RestController
@RequestMapping("production/buildUnitTest")
public class CBuildUnitTest {


    private SBuildUnitTest SBuildUnitTest;
    private SBuildProduct SBuildProduct;
    private SBuild SBuild;

    public CBuildUnitTest(SBuildUnitTest SBuildUnitTest,SBuildProduct SBuildProduct, SBuild SBuild) {
        this.SBuildUnitTest = SBuildUnitTest;
        this.SBuildProduct = SBuildProduct;
        this.SBuild = SBuild;
    }

    /*Creation d'un object UnitTest
     * Args : - requiered - UnitTest buildUnitTest       -> Object UnitTest a crée
     * Return : Le buildUnitTest créé
     */
    @PostMapping
    @JsonView(value = { Views.UnitTest.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createUnitTest(@RequestBody BuildUnitTest buildUnitTest) {
        //Check all arg of buildUnitTest
        String error = checkUnitTest(buildUnitTest);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if buildProduct already exist
        ResponseEntity<BuildUnitTest> u = getUnitTestById(buildUnitTest.getId());
        if (u.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("BuildUnitTest with id : " + buildUnitTest.getId() + " already exist","ERROR"));
        }

        //Create buildUnitTest
        return ResponseEntity.created(URI.create("/production/buildUnitTest")).body(SBuildUnitTest.saveUnitTest(buildUnitTest));

    }

    @PostMapping("build")
    @JsonView(value = { Views.UnitTest.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createAllBuildUnitTest(@RequestBody JenkinsUnitTestParent buildUnitTest) {



        if(buildUnitTest.getIsBuildProduct()){
            Optional<BuildProduct> buildProduct = SBuildProduct.getBuildProductById(buildUnitTest.getId());

            if(buildProduct.isPresent()){
                List<BuildUnitTest> unitTestCreate = new ArrayList<>();
                BuildProduct bp = buildProduct.get();
                for(Build b : bp.getBuilds()){
                    List<JenkinsUnitTest>  listJenkinsUnitTest = new ArrayList<>();
                    for(JenkinsUnitTest unitTest : buildUnitTest.getListUnitTest()){
                        if(b.getRepository().getName().split("/")[b.getRepository().getName().split("/").length-1].equals(unitTest.getModule())){
                            listJenkinsUnitTest.add(unitTest);
                        }
                    }
                    unitTestCreate.addAll(createUnitTestsForABuild( new JenkinsUnitTestParent(b.getId(),false,listJenkinsUnitTest)));
                }
                return ResponseEntity.ok().body(unitTestCreate);
            }else{
                return ResponseEntity.badRequest().body(new Message("BuildProduct with id : " + buildUnitTest.getId() + " not exist","ERROR"));
            }
        }else{
            List<BuildUnitTest> unitTestList = createUnitTestsForABuild(buildUnitTest);
            return ResponseEntity.ok().body(unitTestList);
        }

    }


    List<BuildUnitTest> createUnitTestsForABuild(JenkinsUnitTestParent buildUnitTest){
        Integer allRun = 0;
        Integer allError = 0;
        Integer allSkipped = 0;
        List<BuildUnitTest> unitTests = new ArrayList<>();

        Optional<Build> build = SBuild.getBuildById(buildUnitTest.getId());
        if(build.isPresent()){
            Build b = build.get();
            //Ajout de chaque test unitaires
            for (JenkinsUnitTest unitTest:buildUnitTest.getListUnitTest()) {

                allRun += unitTest.getTotal();
                allError += unitTest.getError();
                allSkipped += unitTest.getSkipped();

                String resultTest = "UNKNOWN";
                if (unitTest.getError() > 0) {resultTest = "FAILURE";}
                else if (unitTest.getSkipped() > 0) {resultTest = "WARNING";}
                else if (unitTest.getTotal() > 0) {resultTest = "SUCCESS";}

                BuildUnitTest tu = new BuildUnitTest(b,resultTest,unitTest.getName(),unitTest.getTotal(),(unitTest.getTotal()-(unitTest.getError()+unitTest.getSkipped())), unitTest.getError(), unitTest.getSkipped());
                SBuildUnitTest.saveUnitTest(tu);
                unitTests.add(tu);
            }
            // Mise a jour du Build
            String wqrResultTU = "UNKNOWN";
            if(allRun !=0) {
                if(allError ==0){
                    if(allSkipped==0){wqrResultTU = "SUCCESS";}
                    else {wqrResultTU = "WARNING";}
                }else{
                    if ((allError + allSkipped) == allRun) {wqrResultTU = "FAILURE";}
                    else {wqrResultTU = "UNSTABLE";}
                }
            }
            b.setResultTU(wqrResultTU);
            SBuild.updateBuild(b);
        }
        return  unitTests;

    }

    /*Récupération de tous buildUnitTest existants
     * Return : L'ensemble des buildUnitTests existant
     */
    @GetMapping
    @JsonView(value = { Views.UnitTest.class})
    public List<BuildUnitTest> getAllUnitTests() {
        return SBuildUnitTest.getAllUnitTests();
    }



    /*Récupération d'un buildUnitTest par son ID
     * Args : - requiered - long buildUnitTestId       -> Id du buildUnitTest recherché
     * Return : Le buildUnitTest cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.UnitTest.class})
    public ResponseEntity getUnitTestById(@PathVariable("id") long buildUnitTestId) {
        Optional<BuildUnitTest> b = SBuildUnitTest.getUnitTestById(buildUnitTestId);
        if (b.isPresent()){
            return ResponseEntity.ok().body(b.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("UnitTest not exist("+buildUnitTestId+")","NOTFOUND"));
        }
    }

    /*Mise a jour d'un buildUnitTest par son id
     * Args : - requiered - long buildUnitTestId       -> Id du buildUnitTest recherché
     * Args : - requiered - UnitTest buildUnitTest        -> Les informations du buildUnitTest mis à jour
     * Return : Le buildUnitTest mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.UnitTest.class})
    public ResponseEntity updateUnitTest(@PathVariable("id") long buildUnitTestId, @RequestBody BuildUnitTest buildUnitTest) {
        Optional<BuildUnitTest> but= SBuildUnitTest.getUnitTestById(buildUnitTestId);
        if(but.isPresent()){
            BuildUnitTest savedUnitTest = but.get();
            if (buildUnitTest.getName() != null) {
                savedUnitTest.setName(buildUnitTest.getName());
            }
            if (buildUnitTest.getResult() != null) {
                savedUnitTest.setResult(buildUnitTest.getResult());
            }
            if (buildUnitTest.getBuild() != null) {
                savedUnitTest.setBuild(buildUnitTest.getBuild());
            }
            if (buildUnitTest.getNbTestTotal() != null) {
                savedUnitTest.setNbTestTotal(buildUnitTest.getNbTestTotal());
            }
            if (buildUnitTest.getNbTestOk() != null) {
                savedUnitTest.setNbTestOk(buildUnitTest.getNbTestOk());
            }
            if (buildUnitTest.getNbTestKo() != null) {
                savedUnitTest.setNbTestKo(buildUnitTest.getNbTestKo());
            }
            if (buildUnitTest.getNbTestSkipped() != null) {
                savedUnitTest.setNbTestSkipped(buildUnitTest.getNbTestSkipped());
            }
            return ResponseEntity.ok().body(SBuildUnitTest.updateUnitTest(savedUnitTest));
        } else{
            return ResponseEntity.badRequest().body(new Message("BuildUnitTest not exist("+buildUnitTestId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un buildUnitTest
     * Args : - requiered - long buildUnitTestId       -> Id du buildUnitTest a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteUnitTest(@PathVariable("id") long buildUnitTestId) {
        Optional<BuildUnitTest> b = SBuildUnitTest.getUnitTestById(buildUnitTestId);
        if(b.isPresent()){
            SBuildUnitTest.deleteUnitTest(buildUnitTestId);
            return ResponseEntity.ok().body(new Message("BuildUnitTest deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("BuildUnitTest not exist.","ERROR"));}
    }

    /*Fonction de vérification des arguments d'un objet de UnitTest
     * Args : - requiered - UnitTest buildUnitTest        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkUnitTest(BuildUnitTest buildUnitTest) {
        String error = "";
        String buildUnitTestName = buildUnitTest.getName();
        String buildUnitTestResult = buildUnitTest.getResult();
        Integer buildUnitTestTotal = buildUnitTest.getNbTestTotal();
        Integer buildUnitTestOk = buildUnitTest.getNbTestOk();
        Integer buildUnitTestKo = buildUnitTest.getNbTestKo();
        Integer buildUnitTestSkipped = buildUnitTest.getNbTestSkipped();

        if (buildUnitTestName == null) {
            error += "Missing field 'name', ";
        }
        if (buildUnitTestResult == null) {
            error += "Missing field 'result', ";
        }
        if (buildUnitTestTotal == null) {
            error += "Missing field 'nbTestTotal', ";
        }
        if (buildUnitTestOk == null) {
            error += "Missing field 'nbTestOk', ";
        }
        if (buildUnitTestKo == null) {
            error += "Missing field 'nbTestKo', ";
        }
        if (buildUnitTestSkipped == null) {
            error += "Missing field 'nbTestSkipped'";
        }
        return error;
    }
}