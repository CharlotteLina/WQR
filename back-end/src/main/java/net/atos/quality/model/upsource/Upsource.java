package net.atos.quality.model.upsource;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "upsource")
public class Upsource {

    @Id
    @JsonView(value = { Views.Build.class,Views.Upsource.class,Views.BuildProduct.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonView(value = { Views.Upsource.class})
    @JsonIdentityReference(alwaysAsId = true)
    Build build;

    @Column(name = "type", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    @Enumerated(EnumType.STRING)
    UpsourceCauseType type;

    @Column(name = "information", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private String information;

    @Column(name = "author", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private String author;

    @Column(name = "reviewer_finish", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private String reviewerFinish;

    @Column(name = "reviewer_not_finish", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private String reviewerNotFinish;

    @Column(name = "raised", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private String raised;

    @Column(name = "date", nullable = false)
    @JsonView(value = { Views.Upsource.class,Views.BuildProduct.class,Views.Build.class})
    private LocalDateTime date;

    public Upsource(Build build, UpsourceCauseType type, String information, String author, String reviewerFinish, String reviewerNotFinish, String raised, LocalDateTime date) {
        this.build = build;
        this.type = type;
        this.information = information;
        this.author = author;
        this.reviewerFinish = reviewerFinish;
        this.reviewerNotFinish = reviewerNotFinish;
        this.raised = raised;
        this.date = date;
    }
}