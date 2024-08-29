package net.atos.quality.repository.deploy;

import net.atos.quality.model.build.Build;
import net.atos.quality.model.deploy.DeployPF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface RDeployPF extends JpaRepository<DeployPF, Long> {

    DeployPF findByJenkinsNumberAndName(String jenkinsNumber, String name);



    @Query(value = "SELECT * FROM deploy_pf pf WHERE pf.build_product_id IN " +
            "(SELECT id FROM build_product WHERE product=:product) AND pf.start_date BETWEEN :startDate AND :endDate",
            nativeQuery = true)
    List<DeployPF> getDeploymentsByProductAndDateRange(String product, String startDate, String endDate);

    @Query(value = "SELECT dp.* FROM deploy_pf dp INNER JOIN build_product bp ON dp.build_product_id = bp.id "+
            " INNER JOIN git_branch gb ON bp.branch_id = gb.id "+
            " WHERE gb.name = :branchName "+
            " AND dp.start_date BETWEEN :startDate AND :endDate ",
            nativeQuery = true)
    List<DeployPF> findDeploysByBranchNameAndDateRange(String branchName, String startDate, String endDate
    );

}