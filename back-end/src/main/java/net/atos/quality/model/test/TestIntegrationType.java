package net.atos.quality.model.test;

import java.util.ArrayList;
import java.util.List;


public enum TestIntegrationType {

    CATS("CATS"),
    STIMPACK("STIMPACK"),
    TU_OFUSQUE("TU_OFUSQUE"),
    TBN("TBN"),
    TEST_MANUEL("TEST_MANUEL");
    private final String name;

    private TestIntegrationType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static List<String> getAllType() {
        List<String> allType= new ArrayList<>();
        for (TestIntegrationType type : TestIntegrationType.values()) {
            allType.add(type.getName());
        }
        return allType;
    }
}