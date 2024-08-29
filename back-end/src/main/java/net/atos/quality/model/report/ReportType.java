package net.atos.quality.model.report;

import java.util.ArrayList;
import java.util.List;

public enum ReportType {

    REPORT_BUILD("BUILD"),
    REPORT_TEST("TEST"),
    REPORT_DEPLOY("DEPLOIEMENT"),
    REPORT_METEO("METEO");

    private final String type;

    private ReportType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return type;
    }


    public static List<String> getAllType() {
        List<String> allType= new ArrayList<>();
        for (ReportType type : ReportType.values()) {
            allType.add(type.getLabel());
        }
        return allType;
    }


}
