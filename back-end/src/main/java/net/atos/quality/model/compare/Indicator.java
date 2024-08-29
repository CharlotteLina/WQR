package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.util.List;
import java.util.Map;

@Getter


public class Indicator {
    @JsonView(value = { Views.BuildProduct.class})
    String title;

    @JsonView(value = { Views.BuildProduct.class})
    List<IndicatorDetails> value ;

    public Indicator(String title, List<IndicatorDetails> value) {
        this.title = title;
        this.value = value;
    }
}
