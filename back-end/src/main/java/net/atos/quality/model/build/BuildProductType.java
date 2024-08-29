package net.atos.quality.model.build;


import java.util.ArrayList;
import java.util.List;

public enum BuildProductType {

    COMPONENT("COMPONENT"),
    PROJECT("PROJECT"),
    LIBRARY("LIBRARY");

    private final String type;

    private BuildProductType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return type;
    }


    public static List<String> getAllType() {
        List<String> allType= new ArrayList<>();
        for (BuildProductType type : BuildProductType.values()) {
            allType.add(type.getLabel());
        }
        return allType;
    }


}