package net.atos.quality.model.upsource;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor

@Entity
@Table(name = "upsource_cause")
public class UpsourceCause {

    @Id
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "type", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    @Enumerated(EnumType.STRING)
    UpsourceCauseType type;

    @Column(name = "information", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private String information;

    @Column(name = "author", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private String author;

    @Column(name = "start_date", nullable = false)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = true)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private LocalDateTime endDate;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    GitBranch branch;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    GitRepository repository;

    @OneToMany (mappedBy = "upsourceCause")
    @JsonView(value = { Views.UpsourceCause.class,Views.BuildProduct.class})
    private List<UpsourceCauseHistorique> upsourceCauseHistoriques;


    public UpsourceCause(UpsourceCauseType type, String information, String author, LocalDateTime startDate, GitBranch branch, GitRepository repository) {
        this.type = type;
        this.information = information;
        this.author = author;
        this.startDate = startDate;
        this.branch = branch;
        this.repository = repository;
    }

}