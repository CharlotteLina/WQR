package net.atos.quality.model.build;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public enum BuildType {

    MAVEN("MAVEN"), GRADLE("GRADLE");

    private final String type;

    private BuildType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return type;
    }


    public static List<String> getAllType() {
        List<String> allType= new ArrayList<>();
        for (BuildType type : BuildType.values()) {
            allType.add(type.getLabel());
        }
        return allType;
    }

    public static BuildType getABuildType(String value){
        BuildType buildType = BuildType.MAVEN;
        for (BuildType type : BuildType.values()) {
            if (Objects.equals(type.getLabel(), value)){
                return type;
            }
        }
        return buildType;
    }




}