package net.atos.quality.controller.deploy;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.deploy.DeployPFDetail;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.deploy.SDeployPFDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object DEPLOY PF */
@RestController
@RequestMapping("production/deployPFDetail")
public class CDeployPFDetail {

    private SDeployPFDetail SDeployPFDetail;

    public CDeployPFDetail(SDeployPFDetail SDeployPFDetail) {
        this.SDeployPFDetail = SDeployPFDetail;
    }

    /*Creation d'un object DeployPFDetail
     * Args : - requiered - DeployPFDetail deployPFDetail       -> Object DeployPFDetail a crée
     * Return : Le deployPFDetail créé
     */
    @PostMapping
    @JsonView(value = { Views.DeployPFDetail.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createDeployPFDetail(@RequestBody DeployPFDetail deployPFDetail) {
        //Check if DeployPFDetail is ok
        String error = checkDeployPFDetail(deployPFDetail);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if Deploy pf detail already exist
        ResponseEntity<DeployPFDetail> b = getDeployPFDetailById(deployPFDetail.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("DeployPFDetail with id : " + deployPFDetail.getId() + " already exist","ERROR"));
        }
        return ResponseEntity.created(URI.create("/production/deployPFDetail")).body(SDeployPFDetail.saveDeployPFDetail(deployPFDetail));

    }

    /*Récupération de tous les deployPFDetail existants
     * Return : L'ensemble des deployPFDetail existant
     */
    @GetMapping
    @JsonView(value = { Views.DeployPFDetail.class})
    public List<DeployPFDetail> getAllDeployPFDetails() {
        return SDeployPFDetail.getAllDeployPFDetails();
    }


    /*Récupération d'un deployPFDetail par son ID
     * Args : - requiered - long deployPFDetailId       -> Id du deployPFDetail recherché
     * Return : Le deployPFDetail cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.DeployPFDetail.class})
    public ResponseEntity getDeployPFDetailById(@PathVariable("id") long deployPFDetailId) {
        Optional<DeployPFDetail> d = SDeployPFDetail.getDeployPFDetailById(deployPFDetailId);
        if (d.isPresent()){
            return ResponseEntity.ok().body(d.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("DeployPFDetail not exist("+deployPFDetailId+")","NOTFOUND"));
        }
    }

    /*Récupération d'un deployPFDetail par son numero Jenkins et son nom
     * Args : - requiered - string jenkinsNumber   ->Numero jenkins
     * Args : - requiered - string name            ->Nom du job jenkins
     * Return : Le deployPFDetail cherché
     */
    @GetMapping("jenkins/{name}/{jenkinsNumber}")
    @JsonView(value = { Views.DeployPFDetail.class})
    public ResponseEntity getDeployPFDetailByJenkinsNumberAndName(@PathVariable("name") String deployPFDetaiName,@PathVariable("jenkinsNumber") String deployPFDetailJenkinsNumber) {
        DeployPFDetail d = SDeployPFDetail.getByJenkinsNumberAndName(deployPFDetailJenkinsNumber,deployPFDetaiName);
        if (d!=null){
            return ResponseEntity.ok().body(d);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("DeployPFDetail not exist for jenkinsNumber '"+deployPFDetailJenkinsNumber+"' and name '"+deployPFDetaiName+"'","NOTFOUND"));
        }
    }

    /*Mise a jour d'un deployPFDetail par son id
     * Args : - requiered - long deployPFDetailId       -> Id du deployPFDetail recherché
     * Args : - requiered - DeployPFDetail deployPFDetail     -> Les informations du deployPFDetail mis à jour
     * Return : Le build mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.DeployPFDetail.class})
    public ResponseEntity updateDeployPFDetail(@PathVariable("id") long deployPFDetailId, @RequestBody DeployPFDetail deployPFDetail) {
        Optional<DeployPFDetail> dpfD= SDeployPFDetail.getDeployPFDetailById(deployPFDetailId);
        if(dpfD.isPresent()){
            DeployPFDetail savedDeployPFDetail = dpfD.get();
            if (deployPFDetail.getResult() != null) {
                savedDeployPFDetail.setResult(deployPFDetail.getResult());
            }
            if (deployPFDetail.getName() != null) {
                savedDeployPFDetail.setName(deployPFDetail.getName());
            }
            if (deployPFDetail.getStartDate() != null) {
                savedDeployPFDetail.setStartDate(deployPFDetail.getStartDate());
            }
            if (deployPFDetail.getEndDate() != null) {
                savedDeployPFDetail.setEndDate(deployPFDetail.getEndDate());
            }
            if (deployPFDetail.getJenkinsNumber() != null) {
                savedDeployPFDetail.setJenkinsNumber(deployPFDetail.getJenkinsNumber());
            }
            if (deployPFDetail.getDeployPF() != null) {
                savedDeployPFDetail.setDeployPF(deployPFDetail.getDeployPF());
            }
            if (deployPFDetail.getCause() != null) {
                savedDeployPFDetail.setCause(deployPFDetail.getCause());
            }
            if (deployPFDetail.getMachines() != null) {
                savedDeployPFDetail.setMachines(deployPFDetail.getMachines());
            }
            if (deployPFDetail.getRebuildFrom() != null) {
                savedDeployPFDetail.setRebuildFrom(deployPFDetail.getRebuildFrom());
            }
            return ResponseEntity.ok().body(SDeployPFDetail.updateDeployPFDetail(savedDeployPFDetail));
        }else{
            return ResponseEntity.badRequest().body(new Message("DeployPFDetail not exist("+deployPFDetailId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un deployPFDetail
     * Args : - requiered - long deployPFDetailId       -> Id du deployPFDetail a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteDeployPFDetail(@PathVariable("id") long deployPFDetailId) {
        Optional<DeployPFDetail> b = SDeployPFDetail.getDeployPFDetailById(deployPFDetailId);
        if(b.isPresent()){
            SDeployPFDetail.deleteDeployPFDetail(deployPFDetailId);
            return ResponseEntity.ok().body(new Message("DeployPFDetail deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("DeployPFDetail not exist.","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de DeployPFDetail
     * Args : - requiered - DeployPFDetail deployPFDetail        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkDeployPFDetail(DeployPFDetail deployPFDetail) {
        String error = "";
        String result = deployPFDetail.getResult();
        LocalDateTime startDate = deployPFDetail.getStartDate();
        String name = deployPFDetail.getName();
        String jenkinsNumber = deployPFDetail.getJenkinsNumber();
        DeployPF deployPF = deployPFDetail.getDeployPF();
        String deployPFDetailMachine = deployPFDetail.getMachines();
        if (deployPFDetailMachine == null) {
            error += "Missing field 'machines', ";}
        if (result == null) {
            error += "Missing field 'result', ";}
        if (startDate == null) {
            error += "Missing field 'startDate', ";}
        if (name == null) {
            error += "Missing field 'name', ";}
        if (jenkinsNumber == null) {
            error += "Missing field 'jenkinsNumber', ";}
        if (deployPF == null) {
            error += "Missing field 'deployPF'";}
        return error;
    }
}