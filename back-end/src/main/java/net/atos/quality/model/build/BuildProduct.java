package net.atos.quality.model.build;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "build_product")
public class BuildProduct {

    @Id
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonView(value = {Views.BuildProduct.class})
    @JsonIdentityReference(alwaysAsId = true)
    JenkinsUser jenkinsUser;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private LocalDateTime endDate;

    @Column(name = "name", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private String name;

    @Column(name = "jenkins_number", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private String jenkinsNumber;

    @Column(name = "result", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private String result;

    @Column(name = "status", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private String status;

    @Column(name = "type", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    @Enumerated(EnumType.STRING)
    BuildProductType typeProduct;

    @Column(name = "version", nullable = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    private String version;

    @Column(name = "product", nullable = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    @Enumerated(EnumType.STRING)
    BuildProductModel product;

    @ManyToOne
    @JoinColumn(name = "branch_id", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.TestIntegration.class,Views.DeployPF.class})
    GitBranch branch;

    @ManyToOne
    @JsonView(value = {Views.BuildProduct.class})
    @JoinColumn(name = "rebuild_from_build_product", nullable = true)
    BuildProduct rebuildFrom;

    @ManyToOne
    @JsonView(value = {Views.BuildProduct.class})
    @JoinColumn(name = "build_product_parent", nullable = true)
    BuildProduct buildProductParent;

    @OneToMany (mappedBy = "buildProduct")
    @JsonView(value = { Views.BuildProduct.class})
    private List<Build> builds;

    @OneToMany (mappedBy = "buildProduct")
    @JsonView(value = { Views.BuildProduct.class})
    private List<DeployPF> deployPF;

    @OneToMany (mappedBy = "buildProduct")
    @JsonView(value = { Views.BuildProduct.class})
    private List<TestIntegration> testIntegrations;

    public BuildProduct(LocalDateTime startDate, LocalDateTime endDate, JenkinsUser jenkinsUser,String name,String result, String jenkinsNumber, String status, BuildProductType typeProduct, String version, BuildProductModel product, GitBranch branch) {
        this.startDate = startDate;
        this.jenkinsUser = jenkinsUser;
        this.endDate = endDate;
        this.name = name;
        this.result = result;
        this.jenkinsNumber = jenkinsNumber;
        this.status = status;
        this.typeProduct = typeProduct;
        this.version = version;
        this.product = product;
        this.branch = branch;
    }


}