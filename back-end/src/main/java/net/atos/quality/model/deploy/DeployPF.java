package net.atos.quality.model.deploy;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.*;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "deploy_pf")
public class DeployPF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private long id;

    @ManyToOne
    @JsonView(value = {Views.DeployPF.class})
    @JsonIdentityReference(alwaysAsId = true)
    JenkinsUser jenkinsUser;

    @ManyToOne
    @JsonView(value = { Views.DeployPF.class})
    @JsonIdentityReference(alwaysAsId = true)
    BuildProduct buildProduct;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private LocalDateTime endDate;

    @Column(name = "result", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String result;

    @Column(name = "pf_name", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    @Enumerated(EnumType.STRING)
    DeployPFName pfName;

    @Column(name = "machines", nullable = false,columnDefinition = "varchar(1000) default 'UNKNOWN'")
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String machines;

    @Column(name = "name", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String name;

    @Column(name = "jenkins_number", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String jenkinsNumber;

    @OneToMany (mappedBy = "deployPF")
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class})
    private List<DeployPFDetail> deployPFDetails;

    public DeployPF(BuildProduct buildProduct, JenkinsUser jenkinsUser, LocalDateTime startDate, LocalDateTime endDate, String result, DeployPFName pfName, String machines,String name, String jenkinsNumber) {
        this.buildProduct = buildProduct;
        this.jenkinsUser = jenkinsUser;
        this.startDate = startDate;
        this.endDate = endDate;
        this.result = result;
        this.pfName = pfName;
        this.machines = machines;
        this.name = name;
        this.jenkinsNumber = jenkinsNumber;
    }
}