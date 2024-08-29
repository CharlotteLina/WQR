package net.atos.quality.model.report;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.deploy.DeployPFName;
import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationDetail;
import net.atos.quality.model.test.TestIntegrationType;

import java.time.LocalDateTime;
import java.util.List;

public class ReportTestIntegration {



    @JsonView(value = { Views.BuildProduct.class})
    String type;

    @JsonView(value = { Views.BuildProduct.class})
    private LocalDateTime startDate;

    @JsonView(value = { Views.BuildProduct.class})
    private String duration;

    @JsonView(value = { Views.BuildProduct.class})
    private String result;

    @JsonView(value = { Views.BuildProduct.class})
    private String status;

    @JsonView(value = { Views.BuildProduct.class})
    private String scenarioName;

    @JsonView(value = { Views.BuildProduct.class})
    private Integer nbTestTotal;

    @JsonView(value = { Views.BuildProduct.class})
    private Integer nbTestOk;

    @JsonView(value = { Views.BuildProduct.class})
    private Integer nbTestKo;

    @JsonView(value = { Views.BuildProduct.class})
    private Integer nbTestNa;

    @JsonView(value = { Views.BuildProduct.class})
    private Integer nbTestWarn;

    @JsonView(value = { Views.BuildProduct.class})
    private List<TestIntegrationDetail> testIntegrationDetails;

    @JsonView(value = { Views.BuildProduct.class})
    String pfName;

    @JsonView(value = { Views.BuildProduct.class})
    private String machines;

    @JsonView(value = { Views.BuildProduct.class})
    TestIntegration rebuildFrom;

    public ReportTestIntegration(String type, LocalDateTime startDate, String duration, String result, String status, String scenarioName, Integer nbTestTotal, Integer nbTestOk, Integer nbTestKo, Integer nbTestNa, Integer nbTestWarn, List<TestIntegrationDetail> testIntegrationDetails, String pfName, String machines, TestIntegration rebuildFrom) {
        this.type = type;
        this.startDate = startDate;
        this.duration = duration;
        this.result = result;
        this.status = status;
        this.scenarioName = scenarioName;
        this.nbTestTotal = nbTestTotal;
        this.nbTestOk = nbTestOk;
        this.nbTestKo = nbTestKo;
        this.nbTestNa = nbTestNa;
        this.nbTestWarn = nbTestWarn;
        this.testIntegrationDetails = testIntegrationDetails;
        this.pfName = pfName;
        this.machines = machines;
        this.rebuildFrom = rebuildFrom;
    }
}
