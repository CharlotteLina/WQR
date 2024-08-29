package net.atos.quality.repository.deploy;

import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.deploy.DeployPFDetail;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RDeployPFDetail extends JpaRepository<DeployPFDetail, Long> {

    DeployPFDetail findByJenkinsNumberAndName(String jenkinsNumber, String name);


}