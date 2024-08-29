package net.atos.quality.service.build;

import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.repository.build.RBuildProduct;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class SBuildProduct {

    private static RBuildProduct RBuildProduct;

    public SBuildProduct(RBuildProduct RBuildProduct) {
        this.RBuildProduct = RBuildProduct;
    }

    public BuildProduct savebuildProduct(BuildProduct repository) {

        Optional<BuildProduct> savedbuildProduct = RBuildProduct.findById(repository.getId());
        return RBuildProduct.save(repository);
    }

    public List<BuildProduct> getAllbuildProducts() {
        return RBuildProduct.findAll();
    }

    public Optional<BuildProduct> getBuildProductById(long id) {
        return RBuildProduct.findById(id);
    }


    public BuildProduct updatebuildProduct(BuildProduct updatedBuildProduct) {
        return RBuildProduct.save(updatedBuildProduct);
    }

    public void deletebuildProduct(long id) {
        RBuildProduct.deleteById(id);
    }

    public BuildProduct findByJenkinsAndName(String jenkinsNumber,String name) {
        return RBuildProduct.findByJenkinsNumberAndName(jenkinsNumber,name);
    }

    public BuildProduct findByVersionAndProduct(String versionProduct, String product) {
        return RBuildProduct.getByVersionAndProduct(versionProduct,product);
    }

    public BuildProduct getLastBuildProductForAProduct(String product){
        return RBuildProduct.getLastBuildProductForAProduct(product);
    }
    public BuildProduct getLastBuildProductForAProductAndBranch(String product,Long branch){
        return RBuildProduct.getLastBuildProductForAProductAndBranch(product,branch);
    }

    public BuildProduct getPreviousBuildProduct(long branchId, String product,String name, String startDate ){
        return RBuildProduct.getPreviousBuildProduct(branchId,product,name,startDate);
    }

    public static List<Map<String,Object>> getVersionForModelProductAndReportType(String modelProduct, String reportType){
            switch (reportType) {
                case "BUILD":
                    return RBuildProduct.getVersionForProductModelOfBuildReport(modelProduct);
                case "DEPLOIEMENT", "METEO":
                    return RBuildProduct.getVersionForProductModelOfDeployReportOrWeatherReport(modelProduct);
                case "TEST":
                    return RBuildProduct.getVersionForProductModelOfTestReport(modelProduct);
                default:
                    return new ArrayList<>();
            }

    }

    public List<Map<String,Object>>  getLastTenResumeReport(List<String> productList){
        if(productList.isEmpty()){
            return  RBuildProduct.getLastTenResumeBuildReport();
        }else{
            return RBuildProduct.getLastTenResumeBuildReportForAProductList(productList);
        }
    }

    public List<BuildProduct> getBuildProductComponent(Integer buildProductParent){
        return RBuildProduct.getBuildProductComponent(buildProductParent);
    }

    public List<BuildProduct> getBuildProductForAProductBeetweenTwoDate(String product, String startDate,String endDate){
        return RBuildProduct.getAllBuildProductOfAProductBeetweenTwoDate(product,startDate,endDate);
    }



}