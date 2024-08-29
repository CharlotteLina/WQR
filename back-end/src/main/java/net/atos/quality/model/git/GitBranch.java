package net.atos.quality.model.git;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.*;
import net.atos.quality.model.Views;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "git_branch")
public class GitBranch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.UpsourceCause.class})
    private long id;

    @Column(name = "name", nullable = false)
    @JsonView(value = { Views.Build.class,Views.BuildProduct.class,Views.UpsourceCause.class})
    private String name;

    public GitBranch(String name) {
        this.name = name;
    }
}