package net.atos.quality.model.build;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
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
@Table(name = "build_unit_test")
public class BuildUnitTest {

    //Si tous les tests KO => Résultat = FAILURE
    //Si au moins un test KO => Resultat = UNSTABLE
    //Si aucun KO mais un SKIPPED => Résultat = WARNING
    //Si tous les tests OK => Résultat = SUCCESS

    @Id
    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonView(value = { Views.UnitTest.class})
    @JsonIdentityReference(alwaysAsId = true)
    private Build build;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "result", nullable = false)
    private String result;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "name", nullable = false)
    private String name;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "nb_test_total", nullable = false)
    private Integer nbTestTotal;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "nb_test_ok", nullable = false)
    private Integer nbTestOk;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "nb_test_ko", nullable = false)
    private Integer nbTestKo;

    @JsonView(value = { Views.UnitTest.class,Views.Build.class,Views.BuildProduct.class,Views.BuildProduct.class})
    @Column(name = "nb_test_skipped", nullable = false)
    private Integer nbTestSkipped;

    public BuildUnitTest(Build build, String result, String name, Integer nbTestTotal, Integer nbTestOk, Integer nbTestKo, Integer nbTestSkipped) {
        this.build = build;
        this.result = result;
        this.name = name;
        this.nbTestTotal = nbTestTotal;
        this.nbTestOk = nbTestOk;
        this.nbTestKo = nbTestKo;
        this.nbTestSkipped = nbTestSkipped;
    }
}