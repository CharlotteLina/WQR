
package net.atos.quality.model.test;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.*;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.deploy.DeployPFDetail;
import net.atos.quality.model.deploy.DeployPFName;

import java.time.LocalDateTime;
import java.util.List;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "test_integration")
public class TestIntegration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private long id;

    @ManyToOne
    @JsonView(value = { Views.TestIntegration.class})
    @JsonIdentityReference(alwaysAsId = true)
    BuildProduct buildProduct;

    @Column(name = "type", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    @Enumerated(EnumType.STRING)
    TestIntegrationType type;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private LocalDateTime endDate;

    @Column(name = "result", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private String result;

    @Column(name = "status", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private String status;

    @Column(name = "scenario_name", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private String scenarioName;

    @Column(name = "nb_test_total", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private Integer nbTestTotal;

    @Column(name = "nb_test_ok", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private Integer nbTestOk;

    @Column(name = "nb_test_ko", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private Integer nbTestKo;

    @Column(name = "nb_test_na", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private Integer nbTestNa;

    @Column(name = "nb_test_warn", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private Integer nbTestWarn;

    @OneToMany (mappedBy = "testIntegration")
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class})
    private List<TestIntegrationDetail> testIntegrationDetails;

    @Column(name = "pf_name", nullable = false)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class})
    @Enumerated(EnumType.STRING)
    DeployPFName pfName;

    @Column(name = "machines", nullable = false,columnDefinition = "varchar(1000) default 'UNKNOWN'")
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class})
    private String machines;

    @ManyToOne
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class})
    @JoinColumn(name = "rebuild_from_test_integration", nullable = true)
    TestIntegration rebuildFrom;

    public TestIntegration(BuildProduct buildProduct, TestIntegrationType type, LocalDateTime startDate, LocalDateTime endDate, String result, String status, String scenarioName, Integer nbTestTotal, Integer nbTestOk, Integer nbTestKo, Integer nbTestNa, Integer nbTestWarn, DeployPFName pfName, String machines) {
        this.buildProduct = buildProduct;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.result = result;
        this.status = status;
        this.scenarioName = scenarioName;
        this.nbTestTotal = nbTestTotal;
        this.nbTestOk = nbTestOk;
        this.nbTestKo = nbTestKo;
        this.nbTestNa = nbTestNa;
        this.nbTestWarn = nbTestWarn;
        this.pfName = pfName;
        this.machines = machines;
    }

}