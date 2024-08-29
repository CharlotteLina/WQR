package net.atos.quality.model.deploy;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "deploy_pf_details")
public class DeployPFDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private long id;

    @ManyToOne
    @JsonView(value = {Views.DeployPFDetail.class})
    @JsonIdentityReference(alwaysAsId = true)
    JenkinsUser jenkinsUser;

    @ManyToOne
    @JsonView(value = { Views.DeployPFDetail.class})
    @JsonIdentityReference(alwaysAsId = true)
    DeployPF deployPF;

    @Column(name = "name", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String name;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private LocalDateTime endDate;

    @Column(name = "machines", nullable = false,columnDefinition = "varchar(1000) default 'UNKNOWN'")
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String machines;

    @Column(name = "result", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String result;

    @Column(name = "cause", nullable = true)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String cause;

    @Column(name = "jenkins_number", nullable = false)
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    private String jenkinsNumber;

    @ManyToOne
    @JsonView(value = { Views.DeployPF.class,Views.BuildProduct.class,Views.DeployPFDetail.class})
    @JoinColumn(name = "rebuild_from_deploy_pf_details", nullable = true)
    DeployPFDetail rebuildFrom;


    public DeployPFDetail(DeployPF deployPF, JenkinsUser jenkinsUser, String name, String machines, LocalDateTime startDate, LocalDateTime endDate, String result, String cause, String jenkinsNumber) {
        this.deployPF = deployPF;
        this.jenkinsUser = jenkinsUser;
        this.name = name;
        this.machines = machines;
        this.startDate = startDate;
        this.endDate = endDate;
        this.result = result;
        this.cause = cause;
        this.jenkinsNumber = jenkinsNumber;
    }

    public DeployPFDetail(DeployPF deployPF, JenkinsUser jenkinsUser, String name,String machines, LocalDateTime startDate, String result, String cause, String jenkinsNumber) {
        this.deployPF = deployPF;
        this.jenkinsUser = jenkinsUser;
        this.name = name;
        this.machines = machines;
        this.startDate = startDate;
        this.result = result;
        this.cause = cause;
        this.jenkinsNumber = jenkinsNumber;
    }
}