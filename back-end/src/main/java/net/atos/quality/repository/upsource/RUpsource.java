package net.atos.quality.repository.upsource;

import net.atos.quality.model.build.Build;
import net.atos.quality.model.upsource.Upsource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RUpsource extends JpaRepository<Upsource, Long> {

    @Query(value="SELECT * FROM upsource WHERE build_id=?",nativeQuery = true)
    List<Upsource> getAllUpsourceForABuild(Long buildId);
}
