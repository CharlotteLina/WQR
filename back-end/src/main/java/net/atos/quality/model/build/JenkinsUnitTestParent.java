package net.atos.quality.model.build;

import lombok.Getter;

import java.util.List;

@Getter

public class JenkinsUnitTestParent {
    Long id;
    Boolean isBuildProduct;
    List<JenkinsUnitTest> listUnitTest;

    public JenkinsUnitTestParent(Long id, Boolean isBuildProduct, List<JenkinsUnitTest> listUnitTest) {
        this.id = id;
        this.isBuildProduct = isBuildProduct;
        this.listUnitTest = listUnitTest;
    }
}
