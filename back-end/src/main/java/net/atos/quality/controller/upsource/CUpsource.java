package net.atos.quality.controller.upsource;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.upsource.Upsource;
import net.atos.quality.model.message.Message;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.service.upsource.SUpsource;
import net.atos.quality.service.upsource.SUpsource;
import org.springframework.cglib.core.Local;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("production/upsource")
public class CUpsource {


    private SUpsource sUpsource;

    public CUpsource(SUpsource SUpsource) {
        this.sUpsource = SUpsource;
    }

    /*Creation d'un object Upsource
     * Args : - requiered - Upsource Upsource       -> Object Upsource a crée
     * Return : Le Upsource créé
     */
    @PostMapping
    @JsonView(value = { Views.Upsource.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createUpsource(@RequestBody Upsource upsource) {
        //Check if Upsource already exist
        String error = checkUpsource(upsource);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }

        //Create Upsource
        return ResponseEntity.created(URI.create("/production/upsource")).body(sUpsource.saveUpsource(upsource));
    }

    /*Récupération de tous les types de upsourceCause existant
     * Return : L'ensemble des types de upsourceCause
     */
    @GetMapping("type")
    @JsonView(value = { Views.UpsourceCause.class})
    public List<String> getAllUpsourceCauseType() {
        return UpsourceCauseType.getAllType();
    }

    /*Récupération de toutes les Upsource existants
     * Return : L'ensemble des Upsource existant
     */
    @GetMapping
    @JsonView(value = { Views.Upsource.class})
    public List<Upsource> getAllUpsources() {
        return sUpsource.getAllUpsources();
    }


    /*Récupération de toutes les Upsource existants
     * Return : L'ensemble des Upsource existant
     */
    @GetMapping("/build/{id}")
    @JsonView(value = { Views.Upsource.class})
    public List<Upsource> getAllUpsourcesForABuild(@PathVariable("id") long buildId) {
        return sUpsource.getAllUpsourcesForABuild(buildId);
    }

    /*Récupération d'un Upsource par son ID
     * Args : - requiered - long UpsourceId       -> Id du Upsource recherché
     * Return : Le Upsource cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.Upsource.class})
    public ResponseEntity getUpsourceById(@PathVariable("id") long idUpsource) {
        Optional<Upsource> p = sUpsource.getUpsourceById(idUpsource);
        if (p.isPresent()){
            return ResponseEntity.ok().body(p.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("Upsource not exist("+idUpsource+")","NOTFOUND"));
        }
    }

    /*Mise a jour d'un Upsource par son id
     * Args : - requiered - long UpsourceId            -> Id du Upsource recherché
     * Args : - requiered - Upsource Upsource     -> Les informations du Upsource mis à jour
     * Return : Le Upsource mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.Upsource.class})
    public ResponseEntity updateUpsource(@PathVariable("id") long UpsourceId, @RequestBody Upsource upsource) {
        Optional<Upsource> bb = sUpsource.getUpsourceById(UpsourceId);
        if(bb.isPresent()) {
            Upsource savedUpsource = bb.get();
            if (upsource.getAuthor() != null) {
                savedUpsource.setAuthor(upsource.getAuthor());
            }
            if (upsource.getInformation() != null) {
                savedUpsource.setInformation(upsource.getInformation());
            }
            if (upsource.getReviewerFinish() != null) {
                savedUpsource.setReviewerFinish(upsource.getReviewerFinish());
            }
            if (upsource.getReviewerNotFinish() != null) {
                savedUpsource.setReviewerNotFinish(upsource.getReviewerNotFinish());
            }
            if (upsource.getType() != null) {
                savedUpsource.setType(upsource.getType());
            }
            if (upsource.getRaised() != null) {
                savedUpsource.setRaised(upsource.getRaised());
            }
            if (upsource.getBuild() != null) {
                savedUpsource.setBuild(upsource.getBuild());
            }

            return ResponseEntity.ok().body(sUpsource.updateUpsource(savedUpsource));
        }else{
            return ResponseEntity.badRequest().body(new Message("Upsource not exist("+UpsourceId+")","NOTFOUND"));

        }

    }

    /*Suppression d'un Upsource
     * Args : - requiered - long UpsourceId       -> Id du Upsource a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity  deleteUpsource(@PathVariable("id") long UpsourceId) {

        Optional<Upsource> b = sUpsource.getUpsourceById(UpsourceId);
        if(b.isPresent()){
            sUpsource.deleteUpsource(UpsourceId);
            return ResponseEntity.ok().body(new Message("Upsource deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("Upsource not exist.","ERROR"));
        }
    }

    /*Fonction de vérification des arguments d'un objet de Upsource
     * Args : - requiered - Upsource Upsource        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkUpsource(Upsource upsource) {
        String error = "";
        String info = upsource.getInformation();
        String author = upsource.getAuthor();
        String reviewerFinish = upsource.getReviewerFinish();
        String reviewerNotFinish = upsource.getReviewerNotFinish();
        LocalDateTime date = upsource.getDate();
        if (info == null) {
            error = "Missing field 'information', ";
        }
        if (author == null) {
            error = "Missing field 'author', ";
        }
        if (reviewerFinish == null) {
            error = "Missing field 'reviewerFinish', ";
        }
        if (date == null) {
            error += "Missing field 'date', ";
        }
        if (reviewerNotFinish == null) {
            error = "Missing field 'reviewerNotFinish'";
        }
        return error;
    }


}
