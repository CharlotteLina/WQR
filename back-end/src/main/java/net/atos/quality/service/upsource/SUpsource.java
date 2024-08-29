package net.atos.quality.service.upsource;

import net.atos.quality.model.upsource.Upsource;
import net.atos.quality.repository.upsource.RUpsource;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SUpsource {
    private RUpsource rUpsource;

    public SUpsource(RUpsource RUpsource) {
        this.rUpsource = RUpsource;
    }

    public  Upsource saveUpsource(Upsource Upsource) {
        Optional<Upsource> savedUpsource = rUpsource.findById(Upsource.getId());
        return rUpsource.save(Upsource);
    }

    public List<Upsource> getAllUpsources() {
        return rUpsource.findAll();
    }

    public List<Upsource> getAllUpsourcesForABuild(Long buildId){
        return rUpsource.getAllUpsourceForABuild(buildId);
    }

    public Optional<Upsource> getUpsourceById(long id) {
        return rUpsource.findById(id);
    }

    public Upsource updateUpsource(Upsource updatedUpsource) {
        return rUpsource.save(updatedUpsource);
    }

    public void deleteUpsource(Long idUpsource) {
        rUpsource.deleteById(idUpsource);
    }

}