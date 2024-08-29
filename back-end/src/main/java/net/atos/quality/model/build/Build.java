package net.atos.quality.model.build;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.*;
import net.atos.quality.model.Views;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.upsource.Upsource;
import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "build")
public class Build {

    @Id
    @JsonView(value = { Views.UnitTest.class,Views.UpsourceCause.class,Views.Build.class,Views.BuildProduct.class,Views.Upsource.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonView(value = {Views.Build.class})
    @JsonIdentityReference(alwaysAsId = true)
    JenkinsUser jenkinsUser;

    @ManyToOne
    @JsonView(value = { Views.Build.class})
    @JsonIdentityReference(alwaysAsId = true)
    BuildProduct buildProduct;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private LocalDateTime endDate;

    @Column(name = "type", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    @Enumerated(EnumType.STRING)
    BuildType buildType;

    @Column(name = "status", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String status;

    @Column(name = "jenkins_number", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String jenkinsNumber;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    GitRepository repository;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    GitBranch branch;

    @ManyToOne
    @JsonView(value = {Views.Build.class,Views.BuildProduct.class})
    @JoinColumn(name = "rebuild_from_build", nullable = true)
    Build rebuildFrom;

    //Champs de résultat
    @Column(name = "result_build", columnDefinition = "varchar(255) default 'UNKNOWN'")
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String resultBuild;

    @Column(name = "result_tu", columnDefinition = "varchar(255) default 'UNKNOWN'")
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String resultTU;

    @Column(name = "result_sonar", columnDefinition = "varchar(255) default 'UNKNOWN'")
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String resultSonar;


    // Champs des causes
    @Column(name = "cause_build", nullable = true)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String causeBuild;

    @OneToMany (mappedBy = "build")
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private List<BuildUnitTest> buildUnitTests;

    @Column(name = "cause_sonar", nullable = true,length = 254000)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private String causeSonar;

    @OneToMany (mappedBy = "build")
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class})
    private List<Upsource> upsources;



    public Build(BuildProduct buildProduct, JenkinsUser jenkinsUser, LocalDateTime startDate, LocalDateTime endDate, BuildType buildType, String status, String jenkinsNumber, GitRepository repository, GitBranch branch, String resultBuild, String resultTU, String resultSonar, String causeBuild, String causeSonar) {
        this.buildProduct = buildProduct;
        this.jenkinsUser = jenkinsUser;
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
        this.causeSonar = causeSonar;
    }

    public Build(JenkinsUser jenkinsUser, LocalDateTime startDate, LocalDateTime endDate, BuildType buildType, String status, String jenkinsNumber, GitRepository repository, GitBranch branch) {
        this.jenkinsUser = jenkinsUser;
        this.startDate = startDate;
        this.endDate = endDate;
        this.buildType = buildType;
        this.status = status;
        this.jenkinsNumber = jenkinsNumber;
        this.repository = repository;
        this.branch = branch;
    }
}