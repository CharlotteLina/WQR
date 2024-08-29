package net.atos.quality.controller.user;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.user.SJenkinsUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object BUILD */
@RestController
@RequestMapping("production/jenkinsUser")
public class CJenkinsUser {


    private SJenkinsUser SJenkinsUser;

    public CJenkinsUser(SJenkinsUser SJenkinsUser) {
        this.SJenkinsUser = SJenkinsUser;
    }

    /*Creation d'un object JenkinsUser
     * Args : - requiered - JenkinsUser jenkinsUser       -> Object JenkinsUser a crée
     * Return : Le jenkinsUser créé
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @JsonView(value = { Views.JenkinsUser.class})
    public ResponseEntity createJenkinsUser(@RequestBody JenkinsUser jenkinsUser) {
        //Check all arg of jenkinsUser
        String error = checkJenkinsUser(jenkinsUser);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));

        }
        //Check if jenkinsUser already exist
        ResponseEntity<JenkinsUser> b = getJenkinsUserById(jenkinsUser.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("JenkinsUser with id : " + jenkinsUser.getId() + " already exist","ERROR"));
        }
        //Check if name already exist , => return it
        JenkinsUser jenkinsU = SJenkinsUser.getByName(jenkinsUser.getName());
        if (jenkinsU!=null) {
            return ResponseEntity.ok().body(jenkinsU);
        }


        //Create jenkinsUser
        return ResponseEntity.created(URI.create("/production/jenkinsUser")).body(SJenkinsUser.saveJenkinsUser(jenkinsUser));

    }

    /*Récupération de tous jenkinsUser existants
     * Return : L'ensemble des jenkinsUsers existant
     */
    @GetMapping
    @JsonView(value = { Views.JenkinsUser.class})
    public List<JenkinsUser> getAllJenkinsUsers() {
        return SJenkinsUser.getAllJenkinsUsers();
    }


    /*Récupération d'un jenkinsUser par son ID
     * Args : - requiered - long jenkinsUserId       -> Id du jenkinsUser recherché
     * Return : Le jenkinsUser cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.JenkinsUser.class})
    public ResponseEntity getJenkinsUserById(@PathVariable("id") long jenkinsUserId) {
        Optional<JenkinsUser> b = SJenkinsUser.getJenkinsUserById(jenkinsUserId);
        if (b.isPresent()){
            return ResponseEntity.ok().body(b.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("JenkinsUser not exist("+jenkinsUserId+")","NOTFOUND"));
        }
    }


    /*Mise a jour d'un jenkinsUser par son id
     * Args : - requiered - long jenkinsUserId       -> Id du jenkinsUser recherché
     * Args : - requiered - JenkinsUser jenkinsUser        -> Les informations du jenkinsUser mis à jour
     * Return : Le jenkinsUser mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.JenkinsUser.class})
    public ResponseEntity updateJenkinsUser(@PathVariable("id") long jenkinsUserId, @RequestBody JenkinsUser jenkinsUser) {
        Optional<JenkinsUser> ju =  SJenkinsUser.getJenkinsUserById(jenkinsUserId);
        if(ju.isPresent()){
            JenkinsUser savedJenkinsUser = ju.get();
            if (jenkinsUser.getName() != null) {
                savedJenkinsUser.setName(jenkinsUser.getName());
            }
            return ResponseEntity.ok().body(SJenkinsUser.updateJenkinsUser(savedJenkinsUser));
        }else{
            return ResponseEntity.badRequest().body(new Message("JenkinsUser not exist("+jenkinsUserId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un jenkinsUser
     * Args : - requiered - long jenkinsUserId       -> Id du jenkinsUser a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteJenkinsUser(@PathVariable("id") long jenkinsUserId) {
        Optional<JenkinsUser> b = SJenkinsUser.getJenkinsUserById(jenkinsUserId);
        if(b.isPresent()){
            SJenkinsUser.deleteJenkinsUser(jenkinsUserId);
            return ResponseEntity.ok().body(new Message("JenkinsUser deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("JenkinsUser not exist.","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de JenkinsUser
     * Args : - requiered - JenkinsUser jenkinsUser        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkJenkinsUser(JenkinsUser jenkinsUser) {
        String error = "";
        String name = jenkinsUser.getName();

        if (name == null) {
            error += "Missing field 'name'";
        }
        return error;
    }
}