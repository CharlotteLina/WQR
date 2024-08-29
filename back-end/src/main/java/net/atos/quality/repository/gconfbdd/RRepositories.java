package net.atos.quality.repository.gconfbdd;

import net.atos.quality.model.gconfbdd.Repositories;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class RRepositories {

    private final JdbcTemplate jdbcTemplate;

    public RRepositories(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }




}
