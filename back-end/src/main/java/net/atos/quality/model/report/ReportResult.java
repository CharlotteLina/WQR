package net.atos.quality.model.report;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ReportResult {

    @JsonView(value = { Views.BuildProduct.class})
    private String globalResult;
    @JsonView(value = { Views.BuildProduct.class})
    private String buildResult;
    @JsonView(value = { Views.BuildProduct.class})
    private String compilationResult;
    @JsonView(value = { Views.BuildProduct.class})
    private String testUnitaireResult;
    @JsonView(value = { Views.BuildProduct.class})
    private String sonarResult;
    @JsonView(value = { Views.BuildProduct.class})
    private String upsourceResult;

    @JsonView(value = { Views.BuildProduct.class})
    private String deployResult;
    @JsonView(value = { Views.BuildProduct.class})
    private List<Map<String,Object>> deployResultDetails;

    @JsonView(value = { Views.BuildProduct.class})
    private String testResult;

    @JsonView(value = { Views.BuildProduct.class})
    private List<Map<String,Object>> testResultDetails;
}
