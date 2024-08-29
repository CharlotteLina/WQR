package net.atos.quality.model.build;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public enum BuildProductModel {
    SICS("SICS"),
    SICSA("SICSA"),
    SICSD("SICSD"),
    SICST("SICST"),
    COM("COM"),
    TACTICAL("TACTICAL"),
    IFACES("IFACES"),
    TAIPAN("TAIPAN"),
    COTS("COTS"),
    ANDROID("ANDROID"),
    COMPONENT("COMPONENT");

    private final String name;

    private BuildProductModel(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static List<String> getAllModel() {
        List<String> allModel= new ArrayList<>();
        for (BuildProductModel model : BuildProductModel.values()) {
            allModel.add(model.getName());
        }
        return allModel;
    }


}