package net.atos.quality.repository.upsource;

import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseHistorique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface RUpsourceCauseHistorique extends JpaRepository<UpsourceCauseHistorique, Long> {


    @Query(value="SELECT * FROM upsource_cause_historique WHERE upsource_cause_id = ? ORDER BY date desc",nativeQuery = true)
    List<UpsourceCauseHistorique> getByUpsourceCauseOrderDesc(Integer upsource_cause_id);
}