package net.atos.quality.service.upsource;

import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseHistorique;
import net.atos.quality.repository.upsource.RUpsourceCauseHistorique;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SUpsourceCauseHistorique {
    private RUpsourceCauseHistorique RUpsourceCauseHistorique;

    public SUpsourceCauseHistorique(RUpsourceCauseHistorique RUpsourceCauseHistorique) {
        this.RUpsourceCauseHistorique = RUpsourceCauseHistorique;
    }

    public UpsourceCauseHistorique saveUpsourceCause(UpsourceCauseHistorique upsourceCause) {

        Optional<UpsourceCauseHistorique> savedUpsourceCause = RUpsourceCauseHistorique.findById(upsourceCause.getId());
        return RUpsourceCauseHistorique.save(upsourceCause);
    }
    
    public List<UpsourceCauseHistorique> findByUpsourceCause (Integer upsourceCause){
        return RUpsourceCauseHistorique.getByUpsourceCauseOrderDesc(upsourceCause);
    }


}