package net.atos.quality.repository.build;

import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface RBuild extends JpaRepository<Build, Long> {
    Build findByJenkinsNumberAndBuildType(String jenkinsNumber, BuildType buildType);


    //Pour les comparaisons
    @Query(value="SELECT * FROM build WHERE repository_id=? AND build_product_id IN (?) AND  start_date BETWEEN ? AND ?",nativeQuery = true)
    List<Build> getAllBuildBeetweenTwoDate(Long repositoryId, List<Long> idBuildProduct, String startDate, String endDate);

    @Query(value="SELECT b.id FROM build AS b , git_repository AS gb WHERE b.build_product_id = ? AND gb.name=? AND gb.id = b.repository_id",nativeQuery = true)
    Map<String,Object> getBuildByBuildProductAndRepository(Long buildProductId,String repository);
}