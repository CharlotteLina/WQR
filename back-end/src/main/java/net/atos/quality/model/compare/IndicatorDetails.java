package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.util.Map;

@Getter


public class IndicatorDetails {
    @JsonView(value = { Views.BuildProduct.class})
    String name;

    @JsonView(value = { Views.BuildProduct.class})
    long value ;

    public IndicatorDetails(String name, long value) {
        this.name = name;
        this.value = value;
    }
}
