package net.atos.quality.model.test;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "test_integration_detail")
public class TestIntegrationDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private long id;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonView(value = { Views.TestIntegrationDetail.class})
    TestIntegration testIntegration;

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

    @Column(name = "detail", nullable = true,columnDefinition = "varchar(1000) default 'UNKNOWN'")
    @JsonView(value = { Views.TestIntegration.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class})
    private String detail;

    public TestIntegrationDetail(TestIntegration testIntegration, LocalDateTime startDate, LocalDateTime endDate, String result, String status, String scenarioName, Integer nbTestTotal, Integer nbTestOk, Integer nbTestKo, Integer nbTestNa, Integer nbTestWarn,String detail) {
        this.testIntegration = testIntegration;
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
        this.detail=detail;
    }

    public TestIntegrationDetail(TestIntegration testIntegration, LocalDateTime startDate, LocalDateTime endDate, String result, String status, String scenarioName, Integer nbTestTotal, Integer nbTestOk, Integer nbTestKo, Integer nbTestNa, Integer nbTestWarn) {
        this.testIntegration = testIntegration;
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
    }
}
