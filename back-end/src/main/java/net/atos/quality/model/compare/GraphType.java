package net.atos.quality.model.compare;


import java.util.ArrayList;
import java.util.List;

public enum GraphType {
    LINECHART("LINECHART"),
    BARCHART("BARCHART"),
    BUBBLECHART("BUBBLECHART"),
    COLUMNCHART("COLUMNCHART"),

    DOUGHNUTCHART("DOUGHNUTCHART");



    private final String name;

    private GraphType(String name) {
        this.name = name;
    }




}