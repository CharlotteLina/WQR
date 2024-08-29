package net.atos.quality.controller.git;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.git.GitBranch;

import net.atos.quality.model.message.Message;
import net.atos.quality.service.git.SGitBranch;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object BUILD BRANCH */
@RestController
@RequestMapping("production/gitBranch")
public class CGitBranch {

    private SGitBranch SGitBranch;

    public CGitBranch(SGitBranch SGitBranch) {
        this.SGitBranch = SGitBranch;
    }

    /*Creation d'un object GitBranch
     * Args : - requiered - GitBranch gitBranch       -> Object GitBranch a crée
     * Return : Le gitBranch créé
     */
    @PostMapping
    @JsonView(value = { Views.Build.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createGitBranch(@RequestBody GitBranch branchProduct) {
        //Check if gitBranch already exist
        String error = checkGitBranch(branchProduct);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if gitBranch already exist
        ResponseEntity<GitBranch> b = getGitBranchById(branchProduct.getId());
        if(b.getStatusCode().toString().equals("200 OK")){
            return ResponseEntity.badRequest().body(new Message("GitBranch with id : " + branchProduct.getId()+ " already exist","ERROR"));
        }
        GitBranch bb = SGitBranch.findByName(branchProduct.getName());
        if(bb!=null){
            return ResponseEntity.ok().body(bb);
        }

        //Create gitBranch
        return ResponseEntity.created(URI.create("/production/gitBranch")).body(SGitBranch.savegitBranch(branchProduct));

    }

    /*Récupération de toutes les gitBranch existants
     * Return : L'ensemble des gitBranch existant
     */
    @GetMapping
    @JsonView(value = { Views.Build.class})
    public List<GitBranch> getAllGitBranchs() {
        return SGitBranch.getAllgitBranchs();
    }

    /*Récupération d'un gitBranch par son nom
     * Args : - requiered - String name       -> Nom de la gitBranch recherché
     * Return : Le gitBranch cherché
     */
    @GetMapping("/name/{name}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getGitBranchByName(@PathVariable("name") String nameBranch) {
        GitBranch p = SGitBranch.findByName(nameBranch);
        if (p!=null){
            return ResponseEntity.ok().body(p);
        }else{
            return ResponseEntity.badRequest().body(new Message("GitBranch with name :'"+nameBranch+"' not exist","NOTFOUND"));

        }
    }

    /*Récupération d'un gitBranch par son ID
     * Args : - requiered - long gitBranchId       -> Id du gitBranch recherché
     * Return : Le gitBranch cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getGitBranchById(@PathVariable("id") long idGitBranch) {
        Optional<GitBranch> p = SGitBranch.getGitBranchById(idGitBranch);
        if (p.isPresent()){
            return ResponseEntity.ok().body(p.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("GitBranch not exist("+idGitBranch+")","NOTFOUND"));
        }
    }

    /*Mise a jour d'un gitBranch par son id
     * Args : - requiered - long gitBranchId            -> Id du gitBranch recherché
     * Args : - requiered - GitBranch gitBranch     -> Les informations du gitBranch mis à jour
     * Return : Le gitBranch mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity updateGitBranch(@PathVariable("id") long gitBranchId, @RequestBody GitBranch branchProduct) {
        Optional<GitBranch> bb = SGitBranch.getGitBranchById(gitBranchId);
        if(bb.isPresent()) {
            GitBranch savedGitBranch = bb.get();
            if (branchProduct.getName() != null) {
                savedGitBranch.setName(branchProduct.getName());
            }
            return ResponseEntity.ok().body(SGitBranch.updategitBranch(savedGitBranch));
        }else{
            return ResponseEntity.badRequest().body(new Message("GitBranch not exist("+gitBranchId+")","NOTFOUND"));

        }

    }

    /*Suppression d'un gitBranch
     * Args : - requiered - long gitBranchId       -> Id du gitBranch a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity  deleteGitBranch(@PathVariable("id") long gitBranchId) {

        Optional<GitBranch> b = SGitBranch.getGitBranchById(gitBranchId);
        if(b.isPresent()){
            SGitBranch.deletegitBranch(gitBranchId);
            return ResponseEntity.ok().body(new Message("GitBranch deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("GitBranch not exist.","ERROR"));
        }
    }

    /*Fonction de vérification des arguments d'un objet de GitBranch
     * Args : - requiered - GitBranch gitBranch        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkGitBranch(GitBranch branchProduct) {
        String error = "";
        String gitBranchName = branchProduct.getName();
        if (gitBranchName == null) {
            error = "Missing field 'name'";
        }
        return error;
    }
}