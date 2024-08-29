package net.atos.quality.controller.deploy;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFDetail;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.deploy.SDeployPF;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object DEPLOY PF */
@RestController
@RequestMapping("production/deployPF")
public class CDeployPF {

    private SDeployPF SDeployPF;

    public CDeployPF(SDeployPF SDeployPF) {
        this.SDeployPF = SDeployPF;
    }

    /*Creation d'un object DeployPF
     * Args : - requiered - DeployPF deployPF       -> Object DeployPF a crée
     * Return : Le deployPF créé
     */
    @PostMapping
    @JsonView(value = { Views.DeployPF.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createDeployPF(@RequestBody DeployPF deployPF) {
        //Check if DeployPF is ok
        String error = checkDeployPF(deployPF);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if Deploy pf detail already exist
        ResponseEntity<DeployPF> b = getDeployPFById(deployPF.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("DeployPF with id : " + deployPF.getId() + " already exist","ERROR"));
        }
        return ResponseEntity.created(URI.create("/production/deployPF")).body(SDeployPF.saveDeployPF(deployPF));

    }

    /*Récupération d'un deployPF par son numero Jenkins et son nom
     * Args : - requiered - string jenkinsNumber   ->Numero jenkins
     * Args : - requiered - string name            ->Nom du job jenkins
     * Return : Le deployPF cherché
     */
    @GetMapping("jenkins/{name}/{jenkinsNumber}")
    @JsonView(value = { Views.DeployPF.class})
    public ResponseEntity getDeployPFByJenkinsNumberAndName(@PathVariable("name") String deployPFName,@PathVariable("jenkinsNumber") String deployPFJenkinsNumber) {
        DeployPF d = SDeployPF.getByJenkinsNumberAndName(deployPFJenkinsNumber,deployPFName);
        if (d!=null){
            return ResponseEntity.ok().body(d);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("DeployPF not exist for jenkinsNumber '"+deployPFJenkinsNumber+"' and name '"+deployPFName+"'","NOTFOUND"));
        }
    }

    /*Récupération de tous les deployPF existants
     * Return : L'ensemble des deployPF existant
     */
    @GetMapping
    @JsonView(value = { Views.DeployPF.class})
    public List<DeployPF> getAllDeployPFs() {
        return SDeployPF.getAllDeployPFs();
    }

    /*Récupération de tous les noms de PF
     * Return : L'ensemble des noms de PF
     */
    @GetMapping("name")
    @JsonView(value = { Views.DeployPF.class})
    public List<String> getAllDeployPFName() {
        return DeployPFName.getAllName();
    }

    /*Récupération d'un deployPF par son ID
     * Args : - requiered - long deployPFId       -> Id du deployPF recherché
     * Return : Le deployPF cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.DeployPF.class})
    public ResponseEntity getDeployPFById(@PathVariable("id") long deployPFId) {
        Optional<DeployPF> d = SDeployPF.getDeployPFById(deployPFId);
        if (d.isPresent()){
            return ResponseEntity.ok().body(d.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("DeployPF not exist("+deployPFId+")","NOTFOUND"));
        }
    }

    /*Mise a jour d'un deployPF par son id
     * Args : - requiered - long deployPFId       -> Id du deployPF recherché
     * Args : - requiered - DeployPF deployPF     -> Les informations du deployPF mis à jour
     * Return : Le build mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.DeployPF.class})
    public ResponseEntity updateDeployPF(@PathVariable("id") long deployPFId, @RequestBody DeployPF deployPF) {
        Optional<DeployPF> dpf= SDeployPF.getDeployPFById(deployPFId);
        if(dpf.isPresent()){
            DeployPF savedDeployPF = dpf.get();
            if (deployPF.getResult() != null) {
                savedDeployPF.setResult(deployPF.getResult());
            }
            if (deployPF.getPfName() != null) {
                savedDeployPF.setPfName(deployPF.getPfName());
            }
            if (deployPF.getBuildProduct() != null) {
                savedDeployPF.setBuildProduct(deployPF.getBuildProduct());
            }
            if (deployPF.getStartDate() != null) {
                savedDeployPF.setStartDate(deployPF.getStartDate());
            }
            if (deployPF.getEndDate() != null) {
                savedDeployPF.setEndDate(deployPF.getEndDate());
            }
            if (deployPF.getMachines() != null) {
                savedDeployPF.setMachines(deployPF.getMachines());
            }
            if (deployPF.getMachines() != null) {
                savedDeployPF.setMachines(deployPF.getMachines());
            }
            if (deployPF.getName() != null) {
                savedDeployPF.setName(deployPF.getName());
            }
            if (deployPF.getJenkinsNumber() != null) {
                savedDeployPF.setJenkinsNumber(deployPF.getJenkinsNumber());
            }
            return ResponseEntity.ok().body(SDeployPF.updateDeployPF(savedDeployPF));
        }else{
            return ResponseEntity.badRequest().body(new Message("DeployPF not exist("+deployPFId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un deployPF
     * Args : - requiered - long deployPFId       -> Id du deployPF a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteDeployPF(@PathVariable("id") long deployPFId) {


        Optional<DeployPF> b = SDeployPF.getDeployPFById(deployPFId);
        if(b.isPresent()){
            SDeployPF.deleteDeployPF(deployPFId);
            return ResponseEntity.ok().body(new Message("DeployPF deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("DeployPF not exist.","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de DeployPF
     * Args : - requiered - DeployPF deployPF        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkDeployPF(DeployPF deployPF) {
        String error = "";
        String result = deployPF.getResult();
        DeployPFName deployPFName = deployPF.getPfName();
        LocalDateTime startDate = deployPF.getStartDate();
        String machines = deployPF.getMachines();
        BuildProduct buildProduct = deployPF.getBuildProduct();
        String name = deployPF.getName();
        String jenkinsNumber = deployPF.getJenkinsNumber();

        if (result == null) {
            error += "Missing field 'result', ";
        }
        if (deployPFName == null) {
            error += "Missing field 'pfName', ";
        }
        if (startDate == null) {
            error += "Missing field 'startDate', ";
        }
        if (machines == null) {
            error += "Missing field 'machines', ";
        }
        if (name == null) {
            error += "Missing field 'name', ";
        }
        if (jenkinsNumber == null) {
            error += "Missing field 'jenkinsNumber', ";
        }
        if (buildProduct == null) {
            error += "Missing field 'buildProduct'";
        }
        return error;
    }
}