package net.atos.quality.repository.build;

import net.atos.quality.model.build.BuildProduct;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface RBuildProduct extends JpaRepository<BuildProduct, Long> {
    BuildProduct findByJenkinsNumberAndName(String jenkinsNumber,String name);


    @Query(value="SELECT * FROM build_product bp  WHERE bp.version =?1 AND bp.product=?2 ORDER BY bp.start_date desc LIMIT 1",nativeQuery = true)
    BuildProduct getByVersionAndProduct(String versionProduct, String product );

    //Récuperation du dernier buildProduct d'un produit
    @Query(value="SELECT * FROM build_product WHERE product=?1 ORDER BY START_DATE DESC LIMIT 1",nativeQuery = true)
    BuildProduct getLastBuildProductForAProduct(String product);


    //Récuperation du dernier buildProduct d'un produit et d'une branche
    @Query(value="SELECT * FROM build_product WHERE product=?1 AND branch_id=?2 ORDER BY START_DATE DESC LIMIT 1",nativeQuery = true)
    BuildProduct getLastBuildProductForAProductAndBranch(String product,Long branch);

    //Récuperation du buildProduct précédent
    @Query(value="SELECT * FROM build_product WHERE branch_id=?1 AND product=?2 AND name=?3 AND start_date < ?4 ORDER BY start_date DESC LIMIT 1",nativeQuery = true)
    BuildProduct getPreviousBuildProduct(long branchId, String product,String name, String startDate );


    //Récuperation des versions en fonction d'un produit et d'un type de report

    @Query(value="SELECT bp.id,bp.product, bp.version,gb.name as branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  AND bp.type = 'PROJECT' AND bp.product= ?1 ORDER BY bp.start_date DESC",nativeQuery = true)
    List<Map<String,Object>> getVersionForProductModelOfBuildReport(String modelProduct);
    @Query(value="SELECT bp.id,bp.product, bp.version,gb.name as branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  AND bp.type = 'PROJECT' AND bp.product= ?1 AND bp.id IN (SELECT distinct build_product_id FROM deploy_pf) ORDER BY bp.start_date DESC",nativeQuery = true)
    List<Map<String,Object>> getVersionForProductModelOfDeployReportOrWeatherReport(String modelProduct);
    @Query(value="SELECT bp.id,bp.product, bp.version,gb.name as branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  AND bp.type = 'PROJECT' AND bp.product= ?1 AND bp.id IN (SELECT distinct build_product_id FROM test_integration) ORDER BY bp.start_date DESC",nativeQuery = true)
    List<Map<String,Object>> getVersionForProductModelOfTestReport(String modelProduct);



    //Récuperation des 10 dernieres versions d'un , des produits ou de tous les produits
    @Query(value="SELECT bp.id,bp.product, bp.version, bp.start_date,bp.result,gb.name AS branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  and bp.type = 'PROJECT' ORDER BY bp.start_date DESC LIMIT 10",nativeQuery = true)
    List<Map<String,Object>>  getLastTenResumeBuildReport();

    @Query(value="SELECT bp.id,bp.product, bp.version, bp.start_date,bp.result,gb.name AS branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  and bp.type = 'PROJECT' AND bp.product IN (?1) ORDER BY bp.start_date DESC LIMIT 10",nativeQuery = true)
    List<Map<String,Object>>  getLastTenResumeBuildReportForAProductList(List<String> productList);

//    @Query(value="SELECT bp.id,bp.product, bp.version, bp.start_date,bp.result,gb.name as branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  AND bp.type = 'PROJECT'  AND bp.id IN (SELECT distinct build_product_id FROM deploy_pf) ORDER BY bp.start_date DESC LIMIT 10",nativeQuery = true)
//    List<Map<String,Object>>  getLastTenResumeWeatherReport();
//
//    @Query(value="SELECT  bp.id,bp.product, bp.version, bp.start_date,bp.result,gb.name as branch FROM build_product bp, git_branch gb WHERE bp.branch_id= gb.id  AND bp.type = 'PROJECT'  AND bp.id IN (SELECT distinct build_product_id FROM deploy_pf) AND bp.product IN (?1) ORDER BY bp.start_date DESC LIMIT 10",nativeQuery = true)
//    List<Map<String,Object>>  getLastTenResumeWeatherReportForAProductList(List<String> productList);





    //Recuperation de tous les composants d'un produit
    @Query(value="SELECT * FROM build_product bp WHERE bp.type = 'COMPONENT' AND bp.build_product_parent = ?",nativeQuery = true)
    List<BuildProduct> getBuildProductComponent(Integer buildProductParent);

    //Requete pour les comparaisons
    @Query(value="SELECT * FROM build_product WHERE product=? AND start_date BETWEEN ? AND ? ",nativeQuery = true)
    List<BuildProduct> getAllBuildProductOfAProductBeetweenTwoDate(String product, String startDate, String endDate);




}
