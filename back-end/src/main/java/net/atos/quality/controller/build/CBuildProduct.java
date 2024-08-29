package net.atos.quality.controller.build;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.build.SBuildProduct;
import net.atos.quality.service.git.SGitBranch;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Controller de l'Object build product */
@RestController
@RequestMapping("production/buildProduct")
public class CBuildProduct {

    private SBuildProduct SBuildProduct;
    private SGitBranch SGitBranch;

    public CBuildProduct(SBuildProduct SBuildProduct,SGitBranch SGitBranch) {

        this.SBuildProduct = SBuildProduct;
        this.SGitBranch = SGitBranch;
    }

    /*Creation d'un object buildProduct
     * Args : - requiered - buildProduct buildProduct       -> Object buildProduct a crée
     * Return : Le buildProduct créé
     */
    @PostMapping
    @JsonView(value = { Views.BuildProduct.class})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createbuildProduct(@RequestBody BuildProduct buildProduct) {
        //Check all arg of buildProduct
        String error = checkbuildProduct(buildProduct);
        if (!error.isEmpty()) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));
        }

        //Check if buildProduct already exist
        ResponseEntity<BuildProduct> c = getbuildProductById(buildProduct.getId());
        if (c.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("BuildProduct with id : " + buildProduct.getId() + " already exist","ERROR"));
        }
        //Create buildProduct
        return ResponseEntity.created(URI.create("/production/buildProduct")).body(SBuildProduct.savebuildProduct(buildProduct));

    }

    /*Récupération de tous buildProduct existants
     * Return : L'ensemble des buildProducts existant
     */
    @GetMapping
    @JsonView(value = { Views.BuildProduct.class})
    public List<BuildProduct> getAllbuildProducts() {
        return SBuildProduct.getAllbuildProducts();
    }

    /*Récupération d'un buildProduct par son ID
     * Args : - requiered - long buildProjectId       -> Id du buildProduct recherché
     * Return : Le buildProduct cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity getbuildProductById(@PathVariable("id") long buildProductId) {
        Optional<BuildProduct> bp = SBuildProduct.getBuildProductById(buildProductId);
        if (bp.isPresent()){
            return ResponseEntity.ok().body(bp.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct not exist("+buildProductId+")","NOTFOUND"));
        }
    }


    /*Récupération de tous les types de projet  de build_product existant
     * Return : L'ensemble des types de projet de build_product
     */
    @GetMapping("type")
    public List<String> getAllBuildType() {
        return BuildProductType.getAllType();
    }


    /*Récupération de tous les noms de produit
     * Return : L'ensemble des noms de produit
     */
    @GetMapping("model")
    public List<String> getAllModelBuildProduct() {
        return BuildProductModel.getAllModel();
    }

    /*Récupération d'un buildProduct par son numero jenkins
     * Args : - requiered - integer jenkins       -> Numero du build jenkins
     * Return : Le buildProduct cherché
     */
    @GetMapping("jenkins/{name}/{jenkins}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity getbuildProductByJenkins(@PathVariable("jenkins") String jenkins, @PathVariable("name") String name) {
        BuildProduct b = SBuildProduct.findByJenkinsAndName(jenkins,name);
        if (b!=null){
            return ResponseEntity.ok().body(b);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct not exist with name '"+name+"' and jenkins number '"+jenkins+"'","NOTFOUND"));
        }
    }

    /*Récupération d'un buildProduct par sa version et son produit
     * Args : - requiered - integer jenkins       -> Numero du build jenkins
     * Return : Le buildProduct cherché
     */
    @GetMapping("{product}/{version}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity getbuildProductByVersionAndProduct(@PathVariable("product") String product, @PathVariable("version") String version) {
        BuildProduct b = SBuildProduct.findByVersionAndProduct(version, BuildProductModel.valueOf(product).getName());
        if (b!=null){
            return ResponseEntity.ok().body(b);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct not exist with version '"+version+"' and product '"+product+"'","NOTFOUND"));
        }
    }

    /*Récupération le dernier build build product d'un produit
     * Args : - requiered - string product          -> Le produit recherché
     * Return : Le buildProduct cherché
     */
    @GetMapping("last/{product}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity getLastBuildProductOfAProduct(@PathVariable("product") String product) {
        BuildProduct b = SBuildProduct.getLastBuildProductForAProduct(product);
        if (b!=null){
            return ResponseEntity.ok().body(b);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("No build product for this product :"+product,"NOTFOUND"));
        }
    }


    /*Récupération le dernier build build product d'un produit et branche
     * Args : - requiered - string product          -> Le produit recherché
     * Args : - requiered - string branch           -> Le nom de la branche recherché
     * Return : Le buildProduct cherché
     */
    @GetMapping("last/{product}/{branch}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity getLastBuildProductOfAProductAndABranch(@PathVariable("product") String product,@PathVariable("branch") String branchName) {
        GitBranch branch = SGitBranch.findByName(branchName);
        if(branch!=null) {
            BuildProduct b = SBuildProduct.getLastBuildProductForAProductAndBranch(product, branch.getId());
            if (b != null) {
                return ResponseEntity.ok().body(b);
            } else {
                return ResponseEntity.badRequest().body(new Message("No build product for this product :" + product + " and this branch :" + branchName, "NOTFOUND"));
            }
        }else{
            return ResponseEntity.badRequest().body(new Message("Branch : " + branchName+" not exist", "NOTFOUND"));
        }
    }

    /*Mise a jour d'un buildProduct par son id
     * Args : - requiered - long builProjectdId       -> Id du buildProduct recherché
     * Args : - requiered - buildProduct buildProduct -> Les informations du buildProduct mis à jour
     * Return : Le build mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.BuildProduct.class})
    public ResponseEntity updatebuildProduct(@PathVariable("id") long buildProductId, @RequestBody BuildProduct buildProduct) {
        Optional<BuildProduct> bp =SBuildProduct.getBuildProductById(buildProductId);
        if(bp.isPresent()){
            BuildProduct savedbuildProduct = bp.get();
            if (buildProduct.getStartDate() != null) {
                savedbuildProduct.setStartDate(buildProduct.getStartDate());
            }
            if (buildProduct.getEndDate() != null) {
                savedbuildProduct.setEndDate(buildProduct.getEndDate());
            }
            if (buildProduct.getName() != null) {
                savedbuildProduct.setName(buildProduct.getName());
            }
            if (buildProduct.getJenkinsNumber() != null) {
                savedbuildProduct.setJenkinsNumber(buildProduct.getJenkinsNumber());
            }
            if (buildProduct.getStatus() != null) {
                savedbuildProduct.setStatus(buildProduct.getStatus());
            }
            if (buildProduct.getTypeProduct() != null) {
                savedbuildProduct.setTypeProduct(buildProduct.getTypeProduct());
            }
            if (buildProduct.getVersion() != null) {
                savedbuildProduct.setVersion(buildProduct.getVersion());
            }
            if (buildProduct.getProduct() != null) {
                savedbuildProduct.setProduct(buildProduct.getProduct());
            }
            if (buildProduct.getBranch() != null) {
                savedbuildProduct.setBranch(buildProduct.getBranch());
            }
            if (buildProduct.getResult() != null) {
                savedbuildProduct.setResult(buildProduct.getResult());
            }
            if (buildProduct.getBuildProductParent() != null) {
                savedbuildProduct.setBuildProductParent(buildProduct.getBuildProductParent());
            }
            if (buildProduct.getRebuildFrom() != null) {
                savedbuildProduct.setRebuildFrom(buildProduct.getRebuildFrom());
            }
            return ResponseEntity.ok().body(SBuildProduct.updatebuildProduct(savedbuildProduct));

        }else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct not exist("+buildProductId+")","NOTFOUND"));

        }
    }

    /*Suppression d'un buildProduct
     * Args : - requiered - long buildProductId       -> Id du buildProduct a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deletebuildProduct(@PathVariable("id") long buildProductId) {

        Optional<BuildProduct> b = SBuildProduct.getBuildProductById(buildProductId);
        if(b.isPresent()){
            SBuildProduct.deletebuildProduct(buildProductId);
            return ResponseEntity.ok().body(new Message("BuildProduct deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct not exist.","ERROR"));
        }

    }


    /*Fonction de vérification des arguments d'un objet de buildProduct
     * Args : - requiered - buildProduct buildProduct        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkbuildProduct(BuildProduct buildProduct) {
        String error = "";
        LocalDateTime buildProductDate = buildProduct.getStartDate();
        String jenkinsbuildProduct = buildProduct.getJenkinsNumber();
        String statusbuildProduct = buildProduct.getStatus();
        BuildProductType buildProductType = buildProduct.getTypeProduct();
        BuildProductModel buildProductModel = buildProduct.getProduct();
        GitBranch gitBranch = buildProduct.getBranch();
        String namebuildProduct = buildProduct.getName();
        String resultBuildProduct = buildProduct.getResult();
        if (buildProductDate == null) {
            error += "Missing field 'startDate', ";
        }
        if (jenkinsbuildProduct == null) {
            error += "Missing field 'jenkinsNumber', ";
        }
        if (statusbuildProduct == null) {
            error += "Missing field 'status', ";
        }
        if (buildProductType == null) {
            error += "Missing field 'typeProduct', ";
        }
        if (buildProductModel == null) {
            error += "Missing field 'product', ";
        }
        if (gitBranch == null) {
            error += "Missing field 'branch', ";
        }
        if (namebuildProduct == null) {
            error += "Missing field 'name', ";
        }
        if (resultBuildProduct == null) {
            error += "Missing field 'result'";
        }
        return error;
    }
}