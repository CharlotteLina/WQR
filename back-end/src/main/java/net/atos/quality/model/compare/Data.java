package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.util.List;

@Setter
@Getter

@NoArgsConstructor

public class Data {
    @JsonView(value = { Views.BuildProduct.class})
    String title;

    @JsonView(value = { Views.BuildProduct.class})
    List<DataPoint> dataPoints;

}
