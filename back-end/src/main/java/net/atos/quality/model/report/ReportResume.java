package net.atos.quality.model.report;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.user.JenkinsUser;

import java.time.LocalDateTime;

public class ReportResume {

    @JsonView(value = { Views.Report.class})
    private long id;

    @JsonView(value = { Views.Report.class})
    private String product;

    @JsonView(value = { Views.Report.class})
    private String version;

    @JsonView(value = { Views.Report.class})
    private LocalDateTime start_date;

    @JsonView(value = { Views.Report.class})
    private String result_global;

    @JsonView(value = { Views.Report.class})
    private String result_build;

    @JsonView(value = { Views.Report.class})
    private String result_deploy;

    @JsonView(value = { Views.Report.class})
    private String result_test;

    @JsonView(value = { Views.Report.class})
    private String branch;

    @JsonView(value = { Views.Report.class})
    private String status;

    public ReportResume(long id, String product, String version, LocalDateTime start_date, String resultGlobal,String resultBuild,String resultDeploy,String resultTest, String branch,String status) {
        this.id = id;
        this.product = product;
        this.version = version;
        this.start_date = start_date;
        this.result_global = resultGlobal;
        this.result_build = resultBuild;
        this.result_deploy = resultDeploy;
        this.result_test = resultTest;

        this.branch = branch;
        this.status= status;
    }
}
