package net.atos.quality.model.gconfbdd;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor

public class Repositories {
    String repoName;
    String upsourceProjectId;
    String upsourceRepoMapping;
    String sonarProjectKey;


    public Repositories(String repoName, String upsourceProjectId,String upsourceRepoMapping, String sonarProjectKey) {
        this.repoName = repoName;
        this.upsourceRepoMapping = upsourceRepoMapping;
        this.upsourceProjectId = upsourceProjectId;
        this.sonarProjectKey = sonarProjectKey;
    }
}
