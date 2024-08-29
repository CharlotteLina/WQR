package net.atos.quality.model.build;

import lombok.Getter;

@Getter

public class JenkinsUnitTest {
    private String name;
    private String module;
    private Integer total;
    private Integer error;
    private Integer skipped;

    public JenkinsUnitTest(String name, String module, Integer total, Integer error, Integer skipped) {
        this.name = name;
        this.module = module;
        this.total = total;
        this.error = error;
        this.skipped = skipped;
    }
}
