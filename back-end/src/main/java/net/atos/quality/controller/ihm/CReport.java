package net.atos.quality.controller.ihm;


import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.build.BuildProductModel;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.gconfbdd.Repositories;
import net.atos.quality.model.message.Message;
import net.atos.quality.model.report.*;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseHistorique;
import net.atos.quality.repository.gconfbdd.RRepositories;
import net.atos.quality.service.build.SBuildProduct;
import net.atos.quality.service.upsource.SUpsourceCause;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;


@RestController
@RequestMapping("production/report")
public class CReport {


    private SBuildProduct sBuildProduct;
    private SUpsourceCause sUpsourceCause;

    public CReport(SBuildProduct SBuildProduct, SUpsourceCause SUpsourceCause) {
        this.sBuildProduct = SBuildProduct;
        this.sUpsourceCause = SUpsourceCause;

    }


    /*Récupération de tous les types de report existant
     * Return : L'ensemble des types de report
     */
    @GetMapping("type")
    public List<String> getAllReportType() {
        return ReportType.getAllType();
    }


    /*Récupération des résumes des rapports (BUILD ou METEO)
     * Return : L'ensemble des types de report
     */
    @GetMapping("resume")
    public ResponseEntity getLastTenResumeReport(@RequestParam("product") List<String> product) {
        List<Map<String,Object>> lastTenResumeReport = sBuildProduct.getLastTenResumeReport(product);

        List<ReportResume> reportResumes = new ArrayList<>();
        for(Map<String,Object> aResumeReport : lastTenResumeReport){
            Optional<BuildProduct> bp = sBuildProduct.getBuildProductById((Long) aResumeReport.get("id"));
            if(bp.isPresent()){
                Report r = createAReport(bp.get(),false);
                reportResumes.add(new ReportResume(bp.get().getId(),r.getProduct(),r.getVersion(),r.getStartDate(),r.getCurrentResult().getGlobalResult(),r.getCurrentResult().getBuildResult(),r.getCurrentResult().getDeployResult(),r.getCurrentResult().getTestResult(),r.getBranch(),r.getStatus()));
            }

        }
        return ResponseEntity.ok().body(reportResumes);
    }


    /*Récupération de l'ensemble des versions produit pour un model produit et un type de report
     * Args : - requiered - String  typeReport       -> Type de report souhaité
     * Args : - requiered - String  modelProduct     -> Model du produit souhaité
     * Return : L'ensemble une liste de l'ensemble des versions correspondant
     */
    @GetMapping("{reportType}/{modelProduct}")
    public ResponseEntity getAllVersionForAProductAndReport(@PathVariable("reportType") String reportType, @PathVariable("modelProduct") String modelProduct) {
        return ResponseEntity.ok().body(SBuildProduct.getVersionForModelProductAndReportType(modelProduct,reportType));
    }


    /*Genere le rapport d'un buildProduct id (Rapport commun pour BUILD, TEST, DEPLOIEMENT, TEST)
     * Args : - requiered - Integer id         -> Id du build_product concerné
     * Return : Le build product au type rapport
     */
    @GetMapping("{id}")
    @JsonView(value = { Views.BuildProduct.class})

    public ResponseEntity getAReport(@PathVariable("id") Integer id) {
        Optional<BuildProduct> buildProduct = sBuildProduct.getBuildProductById(id);
        if(buildProduct.isPresent()){
            return ResponseEntity.ok().body(createAReport(buildProduct.get(),true));

        }else{
            return ResponseEntity.badRequest().body(new Message("BuildProduct with id:'"+id+"'not exist","ERROR"));
        }

    }
    public Report createAReport(BuildProduct bp,Boolean getPreviousVersion){

        ReportResult reportResult = new ReportResult();
        List<String> buildResult = new ArrayList<>();
        List<String> tuResult = new ArrayList<>();
        List<String> sonarResult = new ArrayList<>();

        Report report = new Report(bp.getId(),bp.getJenkinsUser().getName(),bp.getStartDate(),bp.getEndDate(),bp.getName(),bp.getJenkinsNumber(),bp.getStatus(),bp.getTypeProduct().getLabel(),bp.getVersion(),bp.getProduct().getName(),bp.getBranch().getName(),bp.getDeployPF());
        String upsourceResult = "N/A";
        //Mise en place des builds
        List<ReportBuild> buildsForReport = new ArrayList<>();
        //Récupération des causes upsources pour chaque build
        for (Build build:bp.getBuilds()) {
            ReportBuild buildForReport = new ReportBuild(build.getJenkinsUser().getName(),build.getStartDate(),build.getEndDate(),build.getBuildType().getLabel(),build.getStatus(),build.getJenkinsNumber(),build.getRepository().getName(),build.getBranch().getName(),build.getResultBuild(),build.getResultTU(),build.getResultSonar(),build.getCauseBuild(),build.getBuildUnitTests(),build.getCauseSonar(),build.getUpsources());
            Repositories r = getInformationFromGCONFBDD(build.getRepository().getName());
            buildForReport.setUpsourceId(r.getUpsourceProjectId()!=null?r.getUpsourceProjectId():"");
            buildForReport.setUpsourceRepo(r.getUpsourceRepoMapping()!=null?r.getUpsourceRepoMapping():"");
            String sonarKey = "";
            if(r.getSonarProjectKey()!=null){
                sonarKey=!r.getSonarProjectKey().contains(".") ?r.getSonarProjectKey():"";
            }
            buildForReport.setSonarKey(sonarKey);

            String buildResultUpsource ="N/A";
            if(bp.getProduct().getName().equals(BuildProductModel.SICS.getName()) || bp.getProduct().getName().equals(BuildProductModel.SICSA.getName()) || bp.getProduct().getName().equals(BuildProductModel.SICSD.getName())   ) {
                if (build.getCauseBuild()!=null && !build.getCauseBuild().contains("newgen")) {
                    if (!build.getUpsources().isEmpty()) {
                        upsourceResult = "UNSTABLE";
                        buildResultUpsource = "UNSTABLE";
                    } else {
                        buildResultUpsource="SUCCESS";
                        if (upsourceResult.equals("N/A")) {
                            upsourceResult = "SUCCESS";
                        }
                    }
                }
            }
            buildForReport.setResultUpsource(buildResultUpsource);

            //Mise en place des rebuilds
            if(build.getRebuildFrom()!=null){
                ReportBuild buildForReportRebuild = new ReportBuild(build.getJenkinsUser().getName(),build.getStartDate(),build.getEndDate(),build.getBuildType().getLabel(),build.getStatus(),build.getJenkinsNumber(),build.getRepository().getName(),build.getBranch().getName(),build.getResultBuild(),build.getResultTU(),build.getResultSonar(),build.getCauseBuild(),build.getBuildUnitTests(),build.getCauseSonar(),build.getUpsources());
                r = getInformationFromGCONFBDD(build.getRepository().getName());
                buildForReportRebuild.setUpsourceId(r.getUpsourceProjectId()!=null?r.getUpsourceProjectId():"");
                buildForReportRebuild.setUpsourceRepo(r.getUpsourceRepoMapping()!=null?r.getUpsourceRepoMapping():"");
                sonarKey = "";
                if(r.getSonarProjectKey()!=null){
                    sonarKey=!r.getSonarProjectKey().contains(".") ?r.getSonarProjectKey():"";
                }
                buildForReport.setSonarKey(sonarKey);
                buildForReport.setRebuildFrom(buildForReportRebuild);
            }

            buildsForReport.add(buildForReport);
            buildResult.add(build.getResultBuild());
            tuResult.add(build.getResultTU());
            sonarResult.add(build.getResultSonar());
        }
        report.setBuilds(buildsForReport);

        //Mise en place du build product parent
        if(bp.getBuildProductParent()!=null && bp.getTypeProduct().getLabel().equals("PROJECT")){
            report.setBuildProductParent(createAReport(bp.getBuildProductParent(),false));
        }
        //Mise en place du rebuild
        if(bp.getRebuildFrom()!=null){
            report.setRebuildFrom(createAReport(bp.getRebuildFrom(),false));
        }
        //Mise en place des builds product component
        List<BuildProduct> component = sBuildProduct.getBuildProductComponent((int) bp.getId());
        List<Report> allComponent = new ArrayList<>();
        for(BuildProduct aComponent : component){
            allComponent.add(createAReport(aComponent,false));
        }
        report.setComponent(allComponent);

        List<String> globalResult=new ArrayList<>();
        //Mise en place des résultats de build
        String resCompil="";
        if(buildResult.isEmpty()){
            resCompil = bp.getResult();
        }else{
            resCompil = getAResult(buildResult);
        }
        String resTU = getAResult(tuResult);
        String resSonar = getAResult(sonarResult);

        reportResult.setCompilationResult(resCompil);
        reportResult.setTestUnitaireResult(resTU);
        reportResult.setSonarResult(resSonar);
        reportResult.setUpsourceResult(upsourceResult);
        reportResult.setBuildResult(getABuildResult(bp.getResult(),resCompil,resTU,resSonar,upsourceResult));
        globalResult.add(reportResult.getBuildResult());

        //Mise en place du résultat du déploiement
        List<String> deployResult = new ArrayList<>();
        List<Map<String,Object>> deployResultDetails = new ArrayList<>();


        for(DeployPF df : bp.getDeployPF()){
            deployResult.add(df.getResult());
            Map detailsDeploy= new HashMap<>();
            detailsDeploy.put("pfName",df.getPfName().getName()); detailsDeploy.put("result",df.getResult());
            deployResultDetails.add(detailsDeploy);
        }
        String resDPF = getAResult(deployResult);
        reportResult.setDeployResult(resDPF);
        reportResult.setDeployResultDetails(deployResultDetails);
        globalResult.add(resDPF);

        //Mise en place des résultats de tests
        List<String> testResult = new ArrayList<>();
        List<ReportTestIntegration> testIntegrationList = new ArrayList<>();
        List<Map<String,Object>> testResultDetails = new ArrayList<>();
        for(TestIntegration ti : bp.getTestIntegrations()){
            String duration="PENDING";
            if(ti.getEndDate()!=null){
                duration=getDuration(ChronoUnit.MINUTES.between(ti.getStartDate(), ti.getEndDate()));
            }
            testIntegrationList.add(new ReportTestIntegration(ti.getType().getName(),ti.getStartDate(),duration,ti.getResult(),ti.getStatus(),ti.getScenarioName(),ti.getNbTestTotal(),ti.getNbTestOk(),ti.getNbTestKo(),ti.getNbTestNa(),ti.getNbTestWarn(),ti.getTestIntegrationDetails(),ti.getPfName().getName(),ti.getMachines(),ti.getRebuildFrom()));
            testResult.add(ti.getResult());
            Boolean flag = true;
            for(Map<String,Object> o : testResultDetails){
                if(o.get("type")==ti.getType()&&o.get("pfName")==ti.getPfName().getName()){
                    List<String> result = (List<String>) o.get("result");
                    result.add(ti.getResult());
                    flag=false;
                    break;
                }
            }
            if(flag){
                Map<String,Object> newTestDetails = new HashMap<>();
                newTestDetails.put("type",ti.getType());
                newTestDetails.put("pfName",ti.getPfName().getName());
                List<String> r = new ArrayList<>();
                r.add(ti.getResult());
                newTestDetails.put("result",r);
                testResultDetails.add(newTestDetails);

            }

        }

        for(Map<String,Object> o : testResultDetails){
            String result = getAResult((List<String>) o.get("result"));
            o.replace("result",result);
        }


        String resTI = getAResult(testResult);
        report.setTestIntegrations(testIntegrationList);
        reportResult.setTestResult(resTI);
        globalResult.add(resTI);
        reportResult.setTestResultDetails(testResultDetails);

        //Mise en place du résultat global
        reportResult.setGlobalResult(getAResult(globalResult));

        report.setCurrentResult(reportResult);
        //Mise en place des résultat du buildPrécédent
        if(getPreviousVersion) {
            BuildProduct previousBuildProduct = sBuildProduct.getPreviousBuildProduct(bp.getBranch().getId(), bp.getProduct().getName(), bp.getName(), bp.getStartDate().toString());
            if (previousBuildProduct != null) {
                Report previousReport = createAReport(previousBuildProduct, false);
                report.setPreviousResult(previousReport.getCurrentResult());
            }
        }
        return report;
    }

    public String getAResult(List<String> allResult){
        if(allResult.contains("PENDING")) {
            return "PENDING";
        }else if(allResult.contains("FAILURE")|| allResult.contains("KO") || allResult.contains("ERROR")){
            return "FAILURE";
        }else if (allResult.contains("UNSTABLE")){
            return "UNSTABLE";
        }else if (allResult.contains("ABORTED")){
            return "ABORTED";
        }else if(allResult.contains("SUCCESS")|| allResult.contains("OK")|| allResult.contains("_OK_")){
            return "SUCCESS";
        }else if(allResult.contains("N/A")){
            return "N/A";
        }
        return "UNKNOWN";
    }

    public String getABuildResult(String buildProductResult, String buildResult, String tuResult, String sonarResult, String upsourceResult){
        if(buildProductResult.equals("ABORTED")){
            return "ABORTED";
        }else if (buildProductResult.equals("FAILURE")){
            return "FAILURE";
        } else if(buildResult.equals("SUCCESS")){
            if(tuResult.equals("SUCCESS") && sonarResult.equals("SUCCESS") && upsourceResult.equals("SUCCESS")){
                return "SUCCESS";
            }else{
                return "UNSTABLE";
            }
        }else if(buildResult.equals("UNSTABLE")){
            return "UNSTABLE";
        }else if(buildResult.equals("FAILURE")){
            return "FAILURE";
        }
        return "UNKNOWN";
    }

    public String getDuration(long minutes){
        String duration="";
        long hour = 0;
        if(minutes>60){
            hour = (int) (minutes/60);
            minutes = minutes - (hour*60);
        }
        if(hour>0){duration+=hour+"h";}
        if(minutes>0){duration+=minutes+"min";}
        return duration;
    }


    public Repositories getInformationFromGCONFBDD(String name){

        Repositories r = new Repositories();
        try{
            Class.forName("org.mariadb.jdbc.Driver");
            Connection con= DriverManager.getConnection(
                    "jdbc:mariadb://10.106.46.190:3306/gconf_resources","root","Secret.0");
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("SELECT repo_name,upsourceProjectId,upsourceRepoMapping,sonarProjectKey FROM repositories WHERE repo_name LIKE'%"+name+"%' LIMIT 1");
            while(rs.next())
                r= new Repositories(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4));
            con.close();
        }catch(Exception e){ System.out.println(e);}
        return r;
    }

//        try(AnnotationConfigApplicationContext c = new AnnotationConfigApplicationContext(GconfConfiguration.class)){
//            RRepositories rRepositories = c.getBean(RRepositories.class);
//            Repositories repo = rRepositories.getRepositories(name);
//            return repo;
//


}
