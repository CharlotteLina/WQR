package net.atos.quality.model.user;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.atos.quality.model.Views;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "jenkins_user")
public class JenkinsUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(value = { Views.BuildProduct.class,Views.Build.class,Views.DeployPF.class,Views.DeployPFDetail.class,Views.JenkinsUser.class})
    private long id;

    @Column(name = "name", nullable = false)
    @JsonView(value = { Views.BuildProduct.class,Views.Build.class,Views.DeployPF.class,Views.DeployPFDetail.class,Views.JenkinsUser.class})
    private String name;

    public JenkinsUser(String name) {
        this.name = name;
    }
}
