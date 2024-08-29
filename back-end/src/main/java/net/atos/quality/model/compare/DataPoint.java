package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

@Setter
@Getter

public class DataPoint {
    @JsonView(value = { Views.BuildProduct.class})
    String x;
    
    @JsonView(value = { Views.BuildProduct.class})
    String y;

    @JsonView(value = { Views.BuildProduct.class})
    String name;

    public DataPoint() {
    }


    public DataPoint(String y, String name) {
        this.y = y;
        this.name = name;
    }

}
