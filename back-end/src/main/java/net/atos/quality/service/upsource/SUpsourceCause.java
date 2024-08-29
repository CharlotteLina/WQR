package net.atos.quality.service.upsource;

import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseType;
import net.atos.quality.repository.upsource.RUpsourceCause;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SUpsourceCause {
    private RUpsourceCause RUpsourceCause;

    public SUpsourceCause(RUpsourceCause RUpsourceCause) {
        this.RUpsourceCause = RUpsourceCause;
    }

    public UpsourceCause saveUpsourceCause(UpsourceCause upsourceCause) {

        Optional<UpsourceCause> savedUpsourceCause = RUpsourceCause.findById(upsourceCause.getId());
        return RUpsourceCause.save(upsourceCause);
    }

    public List<UpsourceCause> getAllUpsourceCauses() {
        return RUpsourceCause.findAll();
    }

    public Optional<UpsourceCause> getUpsourceCauseById(long id) {
        return RUpsourceCause.findById(id);
    }

    public UpsourceCause updateUpsourceCause(UpsourceCause updatedUpsourceCause) {
        return RUpsourceCause.save(updatedUpsourceCause);
    }
    public List<UpsourceCause> getUpsourceCauseByBranchAndRepositoryWhereEndDateIsNull(Integer branch, Integer repository){
        return RUpsourceCause.getUpsourceCauseByBranchAndRepositoryWhereEndDateIsNull(branch, repository);
    }


}