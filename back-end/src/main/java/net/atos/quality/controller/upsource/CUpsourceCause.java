package net.atos.quality.controller.upsource;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseHistorique;
import net.atos.quality.model.upsource.UpsourceCauseJenkins;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.git.SGitBranch;
import net.atos.quality.service.git.SGitRepository;
import net.atos.quality.service.upsource.SUpsourceCause;
import net.atos.quality.service.upsource.SUpsourceCauseHistorique;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object BUILD */
@RestController
@RequestMapping("production/upsourceCause")
public class CUpsourceCause {


    private SUpsourceCause SUpsourceCause;
    private SUpsourceCauseHistorique sUpsourceCauseHistorique;
    private SGitBranch sGitBranch;

    private SGitRepository sGitRepository;


    public CUpsourceCause(SUpsourceCause SUpsourceCause, SUpsourceCauseHistorique sUpsourceCauseHistorique, SGitBranch sGitBranch, SGitRepository sGitRepository) {
        this.SUpsourceCause = SUpsourceCause;
        this.sUpsourceCauseHistorique=sUpsourceCauseHistorique;
        this.sGitBranch = sGitBranch;
        this.sGitRepository = sGitRepository;
    }

    /*Creation d'un object UpsourceCause
     * Args : - requiered - UpsourceCause upsourceCause       -> Object UpsourceCause a crée
     * Return : Le upsourceCause créé
     */
    @PostMapping
    @JsonView(value = { Views.UpsourceCause.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createUpsourceCauseOfOneRepoAndOneBranch(@RequestBody List<UpsourceCauseJenkins> upsourceCauseJenkins) {
        //Check branch and repository
        Optional<GitBranch> b = sGitBranch.getGitBranchById(upsourceCauseJenkins.get(0).getBranchId());
        Optional<GitRepository> r = sGitRepository.getRepositoryById(upsourceCauseJenkins.get(0).getRepositoryId());
        if (b.isEmpty() || r.isEmpty()) {
            return ResponseEntity.badRequest().body(new Message("Branch or repository not exist","ERROR"));
        }
        //Check all arg of upsourceCauseJenkins
        String error ="";
        for (UpsourceCauseJenkins upjenkins:upsourceCauseJenkins) {
            error += checkUpsourceCause(upjenkins);
        }
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }

        List<UpsourceCause> returnUpSourceCause = new ArrayList<>();
        //Parcours des causes existante en BDD
        List<UpsourceCause> upsourceCauseList = SUpsourceCause.getUpsourceCauseByBranchAndRepositoryWhereEndDateIsNull((int) b.get().getId(), (int) r.get().getId());
        for (UpsourceCause upCause:upsourceCauseList) {
            //Check parmis la liste envoyé si la cause existe
            UpsourceCauseJenkins upsouceCauseJenkinsToUpdate = checkIfUpsourceCauseExist(upsourceCauseJenkins,upCause);
            List<UpsourceCauseHistorique> uph = sUpsourceCauseHistorique.findByUpsourceCause((int) upCause.getId());
            if(upsouceCauseJenkinsToUpdate!=null){
                //La cause envoyé dans la liste existe dans la BDD
                upsourceCauseJenkins.remove(upsouceCauseJenkinsToUpdate);
                UpsourceCauseHistorique newUph=  new UpsourceCauseHistorique(upsouceCauseJenkinsToUpdate.getReviewerFinish(), upsouceCauseJenkinsToUpdate.getReviewerRaised(),upsouceCauseJenkinsToUpdate.getReviewerNotFinish());
                if(!checkIfUpsourceHistoricExist(uph.get(0),newUph)){
                   //Le dernier historique n'existe pas
                    newUph.setDate(upsouceCauseJenkinsToUpdate.getDate());
                    newUph.setUpsourceCause(upCause);
                    UpsourceCauseHistorique u = sUpsourceCauseHistorique.saveUpsourceCause(newUph);
                    uph.add(u);
                    upCause.setUpsourceCauseHistoriques(uph);
                }
            }else{
                //Cas si pas de data pour cette cause alors on détermine la endDate de l'objet UpSourceCause et on créer un historique avec les champs a null
                UpsourceCauseHistorique newUph=  new UpsourceCauseHistorique("", "","",LocalDateTime.now(),upCause);
                UpsourceCauseHistorique u = sUpsourceCauseHistorique.saveUpsourceCause(newUph);
                uph.add(u);
                upCause.setUpsourceCauseHistoriques(uph);
                upCause.setEndDate(LocalDateTime.now());
                SUpsourceCause.updateUpsourceCause(upCause);
            }
            returnUpSourceCause.add(upCause);

        }

        //Les upsources n'existait pas dans la bdd on les créer
        if(!upsourceCauseJenkins.isEmpty()){
            for (UpsourceCauseJenkins upsouceCauseJ:upsourceCauseJenkins) {
                UpsourceCause newUpsourceCause = SUpsourceCause.saveUpsourceCause(new UpsourceCause(UpsourceCauseType.getAType(upsouceCauseJ.getType()),upsouceCauseJ.getInformation(),upsouceCauseJ.getAuthor(),upsouceCauseJ.getDate(),b.get(),r.get()));
                List<UpsourceCauseHistorique> newUpsourceCauseHistorique = new ArrayList<>();
                newUpsourceCauseHistorique.add(sUpsourceCauseHistorique.saveUpsourceCause(new UpsourceCauseHistorique(upsouceCauseJ.getReviewerFinish(),upsouceCauseJ.getReviewerRaised(),upsouceCauseJ.getReviewerNotFinish(),upsouceCauseJ.getDate(),newUpsourceCause)));
                newUpsourceCause.setUpsourceCauseHistoriques(newUpsourceCauseHistorique);
                returnUpSourceCause.add(newUpsourceCause);
            }
        }

        return ResponseEntity.ok(returnUpSourceCause);

    }

    public UpsourceCauseJenkins checkIfUpsourceCauseExist(List<UpsourceCauseJenkins> upsourceCauseList, UpsourceCause u){
        for (UpsourceCauseJenkins up:upsourceCauseList) {
            if(up.getAuthor().equals(u.getAuthor()) && up.getInformation().equals(u.getInformation())&& up.getType().equals(u.getType().getLabel())){return up;}
        }
        return null;
    }
    public boolean checkIfUpsourceHistoricExist(UpsourceCauseHistorique uph, UpsourceCauseHistorique uToCheck){

        if(uph.getReviewerFinish().equals(uToCheck.getReviewerFinish())&&uph.getReviewerNotFinish().equals(uToCheck.getReviewerNotFinish())&&uph.getReviewerRaised().equals(uToCheck.getReviewerRaised())) {return true;}
        return false;
    }

    /*Récupération de tous upsourceCause existants
     * Return : L'ensemble des upsourceCauses existant
     */
    @GetMapping
    @JsonView(value = { Views.UpsourceCause.class})
    public List<UpsourceCause> getAllUpsourceCauses() {
        return SUpsourceCause.getAllUpsourceCauses();
    }



    /*Récupération de tous les types de upsourceCause existant
     * Return : L'ensemble des types de upsourceCause
     */
    @GetMapping("type")
    @JsonView(value = { Views.UpsourceCause.class})
    public List<String> getAllUpsourceCauseType() {
        return UpsourceCauseType.getAllType();
    }

    /*Récupération d'un upsourceCause par son ID
     * Args : - requiered - long upsourceCauseId       -> Id du upsourceCause recherché
     * Return : Le upsourceCause cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.UpsourceCause.class})
    public ResponseEntity getUpsourceCauseById(@PathVariable("id") long upsourceCauseId) {
        Optional<UpsourceCause> b = SUpsourceCause.getUpsourceCauseById(upsourceCauseId);
        if (b.isPresent()){
            return ResponseEntity.ok().body(b.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("UpsourceCause not exist("+upsourceCauseId+")","NOTFOUND"));
        }
    }

    /*Fonction de vérification des arguments d'un objet de UpsourceCause
     * Args : - requiered - UpsourceCause upsourceCause        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkUpsourceCause(UpsourceCauseJenkins upsourceCause) {
        String error = "";
        String upsourceCauseInformation = upsourceCause.getInformation();
        String upsourceCauseAuthor = upsourceCause.getAuthor();
        String upsourceCauseType = upsourceCause.getType();
        LocalDateTime upsourceStartDate = upsourceCause.getDate();
        String upsourceCauseReviewerFinish = upsourceCause.getReviewerFinish();
        String upsourceCauseReviewerNotFinish = upsourceCause.getReviewerNotFinish();

        if (upsourceCauseInformation == null) {
            error += "Missing field 'information', ";
        }
        if (upsourceCauseAuthor == null) {
            error += "Missing field 'author', ";
        }
        if (upsourceCauseType == null) {
            error += "Missing field 'type', ";
        }
        if (upsourceStartDate == null) {
            error += "Missing field 'date', ";
        }
        if (upsourceCauseReviewerFinish == null) {
            error += "Missing field 'reviewerFinish', ";
        }
        if (upsourceCauseReviewerNotFinish == null) {
            error += "Missing field 'reviewerNotFinish'";
        }

        return error;
    }
}