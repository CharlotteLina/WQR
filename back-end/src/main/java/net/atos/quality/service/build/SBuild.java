package net.atos.quality.service.build;

import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildType;
import net.atos.quality.repository.build.RBuild;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class SBuild {

    private RBuild rBuild;

    public SBuild(RBuild RBuild) {
        this.rBuild = RBuild;
    }

    public Build saveBuild(Build repository) {

        Optional<Build> savedBuild = rBuild.findById(repository.getId());
        return rBuild.save(repository);
    }

    public List<Build> getAllBuilds() {
        return rBuild.findAll();
    }

    public Optional<Build> getBuildById(long id) {
        return rBuild.findById(id);
    }

    public Build updateBuild(Build updatedBuild) {
        return rBuild.save(updatedBuild);
    }

    public void deleteBuild(long id) {
        rBuild.deleteById(id);
    }

    public Build findByJenkinsNumberAndBuildType(String jenkins, String buildType){
        BuildType bT = BuildType.getABuildType(buildType);
        return rBuild.findByJenkinsNumberAndBuildType(jenkins,bT);
    }


    public List<Build> getAllBuildBeetweenTwoDate(Long repositoryId, List<Long> idBuildProduct, String startDate, String endDate){
        return rBuild.getAllBuildBeetweenTwoDate(repositoryId,idBuildProduct,startDate,endDate);
    }

    public Map<String,Object> getBuildByBuildProductAndRepository(Long buildProductId, String repository){
        return rBuild.getBuildByBuildProductAndRepository(buildProductId,repository);
    }


}