package net.atos.quality.model.deploy;


import net.atos.quality.model.build.BuildType;

import java.util.ArrayList;
import java.util.List;

public enum DeployPFName {

    AIX_ENGIE_PF("AIX_ENGIE_PF"), AIX_SICS_PF_DEV("AIX_SICS_PF_DEV"), AIX_SICSD_PF_DEV("AIX_SICSD_PF_DEV");

    private final String name;
    private DeployPFName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static List<String> getAllName() {
        List<String> allName= new ArrayList<>();
        for (DeployPFName n : DeployPFName.values()) {
            allName.add(n.getName());
        }
        return allName;
    }


}