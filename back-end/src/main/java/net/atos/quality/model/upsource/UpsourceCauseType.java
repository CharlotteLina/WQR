package net.atos.quality.model.upsource;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public enum UpsourceCauseType {
    ERROR("ERROR"),
    MISSING("MISSING"),
    NOTCLOSED("NOTCLOSED");
    private final String type;

    private UpsourceCauseType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return type;
    }

    public static List<String> getAllType() {
        List<String> allType= new ArrayList<>();
        for (UpsourceCauseType type : UpsourceCauseType.values()) {
            allType.add(type.getLabel());
        }
        return allType;
    }

    public static UpsourceCauseType getAType(String search){
        UpsourceCauseType returnCause = UpsourceCauseType.ERROR;
        for (UpsourceCauseType type : UpsourceCauseType.values()) {
            if(Objects.equals(type.getLabel(), search)){
                returnCause= type;
            }
        }
        return returnCause;
    }




}