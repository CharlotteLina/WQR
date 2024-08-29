package net.atos.quality.repository.upsource;

import net.atos.quality.model.upsource.UpsourceCause;
import net.atos.quality.model.upsource.UpsourceCauseType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface RUpsourceCause extends JpaRepository<UpsourceCause, Long> {


    @Query(value="SELECT * FROM upsource_cause WHERE branch_id = ? AND repository_id = ? AND end_date IS NULL",nativeQuery = true)
    List<UpsourceCause> getUpsourceCauseByBranchAndRepositoryWhereEndDateIsNull(Integer branchId, Integer repositoryId);


    @Query(value="SELECT * FROM upsource_cause WHERE branch_id = ?1 AND repository_id = ?2 AND (end_date IS NULL OR end_date>DATE_ADD(?3, INTERVAL 20 HOUR)) AND start_date<DATE_ADD(?3, INTERVAL 20 HOUR)",nativeQuery = true)
    List<UpsourceCause> getUpSourceCauseForARepoBranchAndDate(Integer branchId, Integer repositoryId, String date);




}