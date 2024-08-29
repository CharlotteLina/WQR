package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.report.ReportBuild;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor

public class Graph {


    @JsonView(value = { Views.BuildProduct.class})
    String title;

    @JsonView(value = { Views.BuildProduct.class})
    GraphType type;

    @JsonView(value = { Views.BuildProduct.class})
    String value;

    @JsonView(value = { Views.BuildProduct.class})
    String axeXName;

    @JsonView(value = { Views.BuildProduct.class})
    String axeYName;

    @JsonView(value = { Views.BuildProduct.class})
    List<Data> dataList;

}
