package net.atos.quality.repository.git;

import net.atos.quality.model.git.GitRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RGitRepository extends JpaRepository<GitRepository, Long> {
    GitRepository findByName(String name);
}