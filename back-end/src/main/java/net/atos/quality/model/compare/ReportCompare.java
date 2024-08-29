package net.atos.quality.model.compare;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

import java.util.List;

@Getter

public class ReportCompare {

    @JsonView(value = { Views.BuildProduct.class})
    List<Long> idBuildProduct;

    @JsonView(value = { Views.BuildProduct.class})
    List<Graph> graphList;

    @JsonView(value = { Views.BuildProduct.class})
    List<Indicator> indicatorList;

    public ReportCompare(List<Long> idBuildProduct,List<Graph> graphList, List<Indicator> indicatorList) {
        this.idBuildProduct = idBuildProduct;
        this.graphList = graphList;
        this.indicatorList = indicatorList;
    }

}
