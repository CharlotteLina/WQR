package net.atos.quality.model.message;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Getter;
import net.atos.quality.model.Views;

@Getter
@AllArgsConstructor

public class Message {

    @JsonView(value = { Views.JenkinsUser.class,Views.UnitTest.class,Views.UpsourceCause.class,Views.Build.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class,Views.TestIntegration.class,Views.DeployPF.class,Views.DeployPFDetail.class})
    private String value;

    @JsonView(value = { Views.JenkinsUser.class,Views.UnitTest.class,Views.UpsourceCause.class,Views.Build.class,Views.BuildProduct.class,Views.TestIntegrationDetail.class,Views.TestIntegration.class,Views.DeployPF.class,Views.DeployPFDetail.class})
    private String level;




}