package net.atos.quality.service.deploy;


import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.repository.deploy.RDeployPF;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SDeployPF {

    private RDeployPF rDeployPF;

    public SDeployPF(RDeployPF rDeployPF) {
        this.rDeployPF = rDeployPF;
    }

    public List<DeployPF> getDeployForAProductBeetweenTwoDate(String product, String startDate, String endDate){
        return rDeployPF.getDeploymentsByProductAndDateRange(product,startDate, endDate);
    }

    public List<DeployPF> getDeployWithProductForAProductBeetweenTwoDate(String branche, String startDate, String endDate){
        return rDeployPF.findDeploysByBranchNameAndDateRange(branche,startDate, endDate);
    }

    public DeployPF saveDeployPF(DeployPF deployPF) {

        Optional<DeployPF> savedDeployPF = rDeployPF.findById(deployPF.getId());
        return rDeployPF.save(deployPF);
    }

    public List<DeployPF> getAllDeployPFs() {
        return rDeployPF.findAll();
    }

    public Optional<DeployPF> getDeployPFById(long id) {
        return rDeployPF.findById(id);
    }

    public DeployPF updateDeployPF(DeployPF updatedDeployPF) {
        return rDeployPF.save(updatedDeployPF);
    }

    public DeployPF getByJenkinsNumberAndName(String jenkinsNumber , String name){
        return rDeployPF.findByJenkinsNumberAndName(jenkinsNumber,name);
    }

    public void deleteDeployPF(long id) {
        rDeployPF.deleteById(id);
    }

}