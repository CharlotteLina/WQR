package net.atos.quality.repository.git;

import net.atos.quality.model.git.GitBranch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RGitBranch extends JpaRepository<GitBranch, Long> {

    GitBranch findByName(String name);

}