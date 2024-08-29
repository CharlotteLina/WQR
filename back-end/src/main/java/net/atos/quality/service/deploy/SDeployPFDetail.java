package net.atos.quality.service.deploy;


import net.atos.quality.model.deploy.DeployPFDetail;
import net.atos.quality.repository.deploy.RDeployPFDetail;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SDeployPFDetail {
    private RDeployPFDetail RDeployPFDetail;

    public SDeployPFDetail(RDeployPFDetail RDeployPFDetail) {
        this.RDeployPFDetail = RDeployPFDetail;
    }

    public DeployPFDetail saveDeployPFDetail(DeployPFDetail deployPF) {

        Optional<DeployPFDetail> savedDeployPFDetail = RDeployPFDetail.findById(deployPF.getId());
        return RDeployPFDetail.save(deployPF);
    }

    public List<DeployPFDetail> getAllDeployPFDetails() {
        return RDeployPFDetail.findAll();
    }

    public Optional<DeployPFDetail> getDeployPFDetailById(long id) {
        return RDeployPFDetail.findById(id);
    }

    public DeployPFDetail updateDeployPFDetail(DeployPFDetail updatedDeployPFDetail) {
        return RDeployPFDetail.save(updatedDeployPFDetail);
    }

    public DeployPFDetail getByJenkinsNumberAndName(String jenkinsNumber , String name){
        return RDeployPFDetail.findByJenkinsNumberAndName(jenkinsNumber,name);
    }

    public void deleteDeployPFDetail(long id) {
        RDeployPFDetail.deleteById(id);
    }


}