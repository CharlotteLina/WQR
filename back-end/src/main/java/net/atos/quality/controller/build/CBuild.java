package net.atos.quality.controller.build;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.git.SGitBranch;
import net.atos.quality.service.git.SGitRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.atos.quality.service.build.SBuild;

import java.net.URI;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/*Controller de l'Object BUILD */
@RestController
@RequestMapping("production/build")
public class CBuild {


    private SBuild SBuild;
    private SGitRepository sGitRepository;
    private SGitBranch sGitBranch;


    public CBuild(SBuild SBuild, SGitRepository SGitRepository,SGitBranch SGitBranch) {
        this.SBuild = SBuild;
        this.sGitRepository = SGitRepository;
        this.sGitBranch=SGitBranch;
    }

    /*Creation d'un object Build
     * Args : - requiered - Build build       -> Object Build a crée
     * Return : Le build créé
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @JsonView(value = { Views.Build.class})
    public ResponseEntity createBuild(@RequestBody Build build) {
        //Check all arg of build
        String error = checkBuild(build);
        if (!error.equals("")) {
            return ResponseEntity.badRequest().body(new Message(error,"ERROR"));

        }
        //Check if build already exist
        ResponseEntity<Build> b = getBuildById(build.getId());
        if (b.getStatusCode().toString().equals("200 OK")) {
            return ResponseEntity.badRequest().body(new Message("Build with id : " + build.getId() + " already exist","ERROR"));
        }

        //Check sonar analysis
        int isSonar=  getSonarInformation(sGitRepository.getRepositoryById(build.getRepository().getId()).get().getName(),sGitBranch.getGitBranchById(build.getBranch().getId()).get().getName());
        if(isSonar==0){
            build.setResultSonar("NOT ANALYZED");
        }

        //Create build
        return ResponseEntity.created(URI.create("/production/build")).body(SBuild.saveBuild(build));

    }


    /*Récupération de tous les types de build existant
     * Return : L'ensemble des types de build
     */
    @GetMapping("type")
    public List<String> getAllBuildType() {
        return BuildType.getAllType();
    }

    /*Récupération d'un build par son ID
     * Args : - requiered - long buildId       -> Id du build recherché
     * Return : Le build cherché
     */
    @GetMapping("")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getBuildByBuildProductAndRepositoryName(@RequestParam("buildProduct") Long buildProduct, @RequestParam("repositoryName") String repositoryName) {
        Map<String,Object> buildId = SBuild.getBuildByBuildProductAndRepository(buildProduct,repositoryName);
        if(buildId.containsKey("id")){
            return ResponseEntity.ok().body(buildId);
        }
        return ResponseEntity.badRequest().body(new Message("No build for buildProduct :'"+buildProduct+"' and repository :'"+repositoryName+"'","NOTFOUND"));
    }

    /*Récupération d'un build par l'id de son build product et le nom de son repo
     * Args : - requiered - long buildProductId       -> Id du build product concerné
     * Args : - requiered - String branchName         -> Nom de la branche
     * Return : L'id du build cherché
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getBuildById(@PathVariable("id") long buildId) {
        Optional<Build> b = SBuild.getBuildById(buildId);
        if(b.isPresent()){
            return ResponseEntity.ok().body(b.get());
        }
        else{
            return ResponseEntity.badRequest().body(new Message("id("+buildId+") not exist of build object","NOTFOUND"));
        }
    }

    /*Récupération d'un build par son numero jenkins
     * Args : - requiered - string jenkins       -> Numero du build jenkins
     * Args : - requiered - string type          -> Type de build (Maven ou graddle)

     * Return : Le build cherché
     */
    @GetMapping("jenkins/{jenkins}/{type}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity getbuildProductByJenkinsAndType(@PathVariable("jenkins") String jenkins,@PathVariable("type") String type) {
        Build b = SBuild.findByJenkinsNumberAndBuildType(jenkins,type);
        if (b!=null){
            return ResponseEntity.ok().body(b);
        }
        else{
            return ResponseEntity.badRequest().body(new Message("No object for jenkins_number("+jenkins+") and type("+type+")","NOTFOUND"));
        }
    }

    /*Mise a jour d'un build par son id
     * Args : - requiered - long buildId       -> Id du build recherché
     * Args : - requiered - Build build        -> Les informations du build mis à jour
     * Return : Le build mis à jour
     */
    @PutMapping("{id}")
    @JsonView(value = { Views.Build.class})
    public ResponseEntity updateBuild(@PathVariable("id") long buildId, @RequestBody Build build) {
        Optional<Build> b =SBuild.getBuildById(buildId);
        if(b.isPresent()) {
            Build savedBuild = b.get();
                if (build.getResultBuild() != null) {
                    savedBuild.setResultBuild(build.getResultBuild());
                }
                if (build.getResultTU() != null) {
                    savedBuild.setResultTU(build.getResultTU());
                }
                if (build.getResultSonar() != null) {
                    int isSonar=  getSonarInformation(sGitRepository.getRepositoryById(savedBuild.getRepository().getId()).get().getName(),sGitBranch.getGitBranchById(savedBuild.getBranch().getId()).get().getName());
                    if(isSonar==0){
                        build.setResultSonar("NOT ANALYZED");
                    }else{
                        savedBuild.setResultSonar(build.getResultSonar());
                    }
                }
                if (build.getBuildProduct() != null) {
                    savedBuild.setBuildProduct(build.getBuildProduct());
                }
                if (build.getRepository() != null) {
                    savedBuild.setRepository(build.getRepository());
                }
                if (build.getBuildType() != null) {
                    savedBuild.setBuildType(build.getBuildType());
                }
                if (build.getStatus() != null) {
                    savedBuild.setStatus(build.getStatus());
                }
                if (build.getJenkinsNumber() != null) {
                    savedBuild.setJenkinsNumber(build.getJenkinsNumber());
                }
                if (build.getStartDate() != null) {
                    savedBuild.setStartDate(build.getStartDate());
                }
                if (build.getEndDate() != null) {
                    savedBuild.setEndDate(build.getEndDate());
                }
                if (build.getCauseBuild() != null) {
                    savedBuild.setCauseBuild(build.getCauseBuild());
                }
                if (build.getCauseSonar() != null) {
                    savedBuild.setCauseSonar(build.getCauseSonar());
                }
                if (build.getBranch() != null) {
                    savedBuild.setBranch(build.getBranch());
                }
                if (build.getRebuildFrom() != null) {
                    savedBuild.setRebuildFrom(build.getRebuildFrom());
                }
            return ResponseEntity.ok().body(SBuild.updateBuild(savedBuild));
        }else{
            return ResponseEntity.badRequest().body(new Message("Build not exist("+buildId+")","NOTFOUND"));

        }
    }

    /*Suppression d'un build
     * Args : - requiered - long buildId       -> Id du build a supprimé
     * Return : /
     */
    @DeleteMapping("{id}")
    public ResponseEntity deleteBuild(@PathVariable("id") long buildId) {

        Optional<Build> b = SBuild.getBuildById(buildId);
        if(b.isPresent()){
            SBuild.deleteBuild(buildId);
            return ResponseEntity.ok().body(new Message("Build deleted successfully!.","INFORMATION"));
        }else{
            return ResponseEntity.badRequest().body(new Message("Build not exist("+buildId+")","ERROR"));

        }

    }

    /*Fonction de vérification des arguments d'un objet de Build
     * Args : - requiered - Build build        -> Les informations à vérifié
     * Return : error (Peut etre null alors aucune erreur dans l'objet)
     */
    public String checkBuild(Build build) {
        String error = "";
        GitBranch gitBranch = build.getBranch();
        BuildType buildType = build.getBuildType();
        GitRepository gitRepository = build.getRepository();
        LocalDateTime buildDate = build.getStartDate();
        String buildStatus = build.getStatus();
        String buildJenkinsNumber = build.getJenkinsNumber();

        if (gitBranch == null) {
            error += "Missing field 'branch', ";
        }
        if (buildType == null) {
            error += "Missing field 'type', ";
        }
        if (gitRepository == null) {
            error += "Missing field 'repository', ";
        }
        if (buildDate == null) {
            error += "Missing field 'startDate', ";
        }
        if (buildStatus == null) {
            error += "Missing field 'status', ";
        }
        if (buildJenkinsNumber == null) {
            error += "Missing field 'jenkinsNumber'";
        }


        return error;
    }


    public int getSonarInformation(String name,String branch){
        int isAnalysis = 0;
        try{
            Class.forName("org.mariadb.jdbc.Driver");
            Connection con= DriverManager.getConnection(
                    "jdbc:mariadb://10.106.46.190:3306/gconf_resources","root","Secret.0");
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("SELECT is_sonar_analysis FROM branches WHERE repo_name = '"+name+"' AND branch_name ='"+branch+"' LIMIT 1");
            while(rs.next()) {
                isAnalysis = rs.getInt(1);
            }
            con.close();
        }catch(Exception e){ System.out.println(e);}
        return isAnalysis;
    }





}