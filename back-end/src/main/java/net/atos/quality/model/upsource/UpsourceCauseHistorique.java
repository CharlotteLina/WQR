package net.atos.quality.model.upsource;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.BuildProduct;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor

@Entity
@Table(name = "upsource_cause_historique")
public class UpsourceCauseHistorique {

    @Id
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "reviewer_finish", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private String reviewerFinish;

    @Column(name = "reviewer_raised", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private String reviewerRaised;

    @Column(name = "reviewer_not_finish", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private String reviewerNotFinish;

    @Column(name = "date", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private LocalDateTime date;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    UpsourceCause upsourceCause;

    public UpsourceCauseHistorique(String reviewerFinish, String reviewerRaised, String reviewerNotFinish,LocalDateTime date, UpsourceCause upsourceCause) {
        this.reviewerFinish = reviewerFinish;
        this.reviewerRaised = reviewerRaised;
        this.reviewerNotFinish = reviewerNotFinish;
        this.date = date;
        this.upsourceCause = upsourceCause;
    }

    public UpsourceCauseHistorique(String reviewerFinish, String reviewerRaised, String reviewerNotFinish) {
        this.reviewerFinish = reviewerFinish;
        this.reviewerRaised = reviewerRaised;
        this.reviewerNotFinish = reviewerNotFinish;
    }
}