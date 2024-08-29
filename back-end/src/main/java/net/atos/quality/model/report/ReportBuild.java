package net.atos.quality.model.report;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.*;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.upsource.Upsource;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter

public class ReportBuild {

    @JsonView(value = { Views.BuildProduct.class})
    String jenkinsUserName;

    @JsonView(value = { Views.BuildProduct.class})
    private LocalDateTime startDate;

    @JsonView(value = { Views.BuildProduct.class})
    private LocalDateTime endDate;

    @JsonView(value = { Views.BuildProduct.class})
    String buildType;

    @JsonView(value = { Views.BuildProduct.class})
    private String status;

    @JsonView(value = { Views.BuildProduct.class})
    private String jenkinsNumber;

    @JsonView(value = { Views.BuildProduct.class})
    String repository;

    @JsonView(value = { Views.BuildProduct.class})
    String branch;

    @JsonView(value = { Views.BuildProduct.class})
    ReportBuild rebuildFrom;

    //Champs de résultat
    @JsonView(value = { Views.BuildProduct.class})
    private String resultBuild;

    @JsonView(value = { Views.BuildProduct.class})
    private String resultTU;

    @JsonView(value = { Views.BuildProduct.class})
    private String resultSonar;

    @JsonView(value = { Views.BuildProduct.class})
    private String resultUpsource;

    @JsonView(value = { Views.BuildProduct.class})
    private String causeBuild;

    @JsonView(value = { Views.BuildProduct.class})
    private List<BuildUnitTest> buildUnitTests;

    @JsonView(value = { Views.BuildProduct.class})
    private String causeSonar;

    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String upsourceRepo;

    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String upsourceId;

    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String sonarKey;

    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private List<Upsource> upsources;

    public ReportBuild(String jenkinsUserName, LocalDateTime startDate, LocalDateTime endDate, String buildType, String status, String jenkinsNumber, String repository, String branch, String resultBuild, String resultTU, String resultSonar, String causeBuild, List<BuildUnitTest> buildUnitTests, String causeSonar, List<Upsource> upsources) {
        this.jenkinsUserName = jenkinsUserName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.buildType = buildType;
        this.status = status;
        this.jenkinsNumber = jenkinsNumber;
        this.repository = repository;
        this.branch = branch;
        this.resultBuild = resultBuild;
        this.resultTU = resultTU;
        this.resultSonar = resultSonar;
        this.causeBuild = causeBuild;
        this.buildUnitTests = buildUnitTests;
        this.causeSonar = causeSonar;
        this.upsources=upsources;
    }
}
