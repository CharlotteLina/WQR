package net.atos.quality.model.report;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.build.BuildProductModel;
import net.atos.quality.model.build.BuildProductType;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Getter
@Setter

public class Report {
    @JsonView(value = { Views.BuildProduct.class})
    long buildProductId;

    @JsonView(value = { Views.BuildProduct.class})
    String jenkinsUserName;

    @JsonView(value = { Views.BuildProduct.class})
    private LocalDateTime startDate;

    @JsonView(value = { Views.BuildProduct.class})
    private LocalDateTime endDate;

    @JsonView(value = { Views.BuildProduct.class})
    private String name;

    @JsonView(value = { Views.BuildProduct.class})
    private String jenkinsNumber;

    @JsonView(value = { Views.BuildProduct.class})
    private String status;

    @JsonView(value = { Views.BuildProduct.class})
    String typeProduct;

    @JsonView(value = { Views.BuildProduct.class})
    private String version;

    @JsonView(value = { Views.BuildProduct.class})
    String product;

    @JsonView(value = { Views.BuildProduct.class})
    String branch;

    @JsonView(value = { Views.BuildProduct.class})
    Report rebuildFrom;

    @JsonView(value = { Views.BuildProduct.class})
    Report buildProductParent;

    @JsonView(value = { Views.BuildProduct.class})
    private List<ReportBuild> builds;

    @JsonView(value = { Views.BuildProduct.class})
    private List<DeployPF> deployPF;

    @JsonView(value = { Views.BuildProduct.class})
    private List<ReportTestIntegration> testIntegrations;

    @JsonView(value = { Views.BuildProduct.class})
    private List<Report> component;

    @JsonView(value = { Views.BuildProduct.class})
    private ReportResult currentResult;

    @JsonView(value = { Views.BuildProduct.class})
    private ReportResult previousResult;



    public Report(long buildProductId,String jenkinsUserName, LocalDateTime startDate, LocalDateTime endDate, String name, String jenkinsNumber, String status, String typeProduct, String version, String product, String branch, List<DeployPF> deployPF) {
        this.buildProductId=buildProductId;
        this.jenkinsUserName = jenkinsUserName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.jenkinsNumber = jenkinsNumber;
        this.status = status;
        this.typeProduct = typeProduct;
        this.version = version;
        this.product = product;
        this.branch = branch;
        this.deployPF = deployPF;
    }
}
