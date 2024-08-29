package net.atos.quality.controller.git;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.git.SGitRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object REPOSITORY */
@RestController
@RequestMapping("production/gitRepository")
public class CGitRepository {

    private SGitRepository SGitRepository;

    public CGitRepository(SGitRepository SGitRepository) {
        this.SGitRepository = SGitRepository;
    }

    /*Creation d'un object Repository
     * Args : - requiered - Repository repository       -> Object Repository a crée
     * Return : Le repository créé
     */
    @PostMapping
    @JsonView(value = { Views.Build.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createRepository(@RequestBody GitRepository repository) {
        //Check all arg for repository
        String error = checkRepository(repository);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }
        //Check if id repository already exist
        ResponseEntity<GitRepository> repo = getRepositoryById(repository.getId());
        if (repo.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("GitRepository with id : " + repository.getId() + " already exist","ERROR"));
        }
        //Check if name already exist , => return it
        GitRepository br = SGitRepository.getRepositoryByName(repository.getName());
        if(br!=null){
            return ResponseEntity.ok().body(br);
        }

        //Create repository
        return ResponseEntity.created(URI.create("/production/gitRepository")).body(SGitRepository.saveRepository(repository));

    }

    /*Récupération de tous les repository existants
     * Return : L'ensemble des repository existant
     */
    @GetMapping
    @JsonView(value = { Views.Build.class})
    public List<GitRepository> getAllRepositorys() {
        return SGitRepository.getAllRepositorys();
    }

    /*Récupération d'un repository par son ID
     * Args : - requiered - long repositoryId       -> Id du repository recherché
     * Return : Le repository cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getRepositoryById(@PathVariable("id") long repositoryId) {
        Optional<GitRepository> r = SGitRepository.getRepositoryById(repositoryId);
        if (r.isPresent()){
            return ResponseEntity.ok().body(r.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("GitRepository not exist("+repositoryId+")","NOTFOUND"));
        }
    }

    /*Récupération d'un repository par son name
     * Args : - requiered - String  name       -> Name du repository recherché
     * Return : Le repository cherché
     */

    @GetMapping("/name/{name}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getRepositoryByName( @PathVariable("name")String name) {
        GitRepository r= SGitRepository.getRepositoryByName(name);
        if (r!=null) {
            return ResponseEntity.ok().body(r);
        } else {
            return ResponseEntity.badRequest().body(new Message("GitRepository with name '"+name+"' not exist","NOTFOUND"));
        }
    }

    /*Mise a jour d'un repository par son id
     * Args : - requiered - long repositoryId       -> Id du repository recherché
     * Args : - requiered - Repository repository   -> Les informations du repository mis à jour
     * Return : Le build mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity updateRepository(@PathVariable("id") long repositoryId, @RequestBody GitRepository repository) {
        Optional<GitRepository> br= SGitRepository.getRepositoryById(repositoryId);
        if(br.isPresent()){
            GitRepository savedRepository = br.get();
            if (repository.getName() != null) {
                savedRepository.setName(repository.getName());
            }
            return ResponseEntity.ok().body(SGitRepository.updateRepository(savedRepository));
    }      else{
            return ResponseEntity.badRequest().body(new Message("GitRepository not exist("+repositoryId+")","NOTFOUND"));
        }

    }

    /*Suppression d'un repository
     * Args : - requiered - long repositoryId       -> Id du repository a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteRepository(@PathVariable("id") long repositoryId) {

        Optional<GitRepository> b = SGitRepository.getRepositoryById(repositoryId);
        if(b.isPresent()){
            SGitRepository.deleteRepository(repositoryId);
            return ResponseEntity.ok().body(new Message("GitRepository deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("GitRepository not exist.","ERROR"));

        }
    }

    /*Fonction de vérification des arguments d'un objet de Repository
     * Args : - requiered - Repository repository        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkRepository(GitRepository repository) {
        String error = "";
        String name = repository.getName();

        if (name == null) {
            error += "Missing field 'name'";
        }
        return error;
    }
}