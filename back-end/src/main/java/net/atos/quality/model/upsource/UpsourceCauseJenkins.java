package net.atos.quality.model.upsource;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class UpsourceCauseJenkins {

    private String type;

    private String information;

    private String author;

    private LocalDateTime date;

    private Integer  branchId;

    private Integer repositoryId;

    private String reviewerFinish;

    private String reviewerRaised;

    private String reviewerNotFinish;

}