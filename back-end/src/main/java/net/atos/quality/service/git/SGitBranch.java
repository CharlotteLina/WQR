package net.atos.quality.service.git;

import net.atos.quality.model.git.GitBranch;
import net.atos.quality.repository.git.RGitBranch;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SGitBranch {

    private RGitBranch RGitBranch;

    public SGitBranch(RGitBranch RGitBranch) {
        this.RGitBranch = RGitBranch;
    }

    public GitBranch savegitBranch(GitBranch repository) {

        Optional<GitBranch> savedgitBranch = RGitBranch.findById(repository.getId());
        return RGitBranch.save(repository);
    }

    public List<GitBranch> getAllgitBranchs() {
        return RGitBranch.findAll();
    }

    public Optional<GitBranch> getGitBranchById(long id) {
        return RGitBranch.findById(id);
    }

    public GitBranch updategitBranch(GitBranch updatedGitBranch) {
        return RGitBranch.save(updatedGitBranch);
    }

    public void deletegitBranch(long id) {
        RGitBranch.deleteById(id);
    }

    public GitBranch findByName(String name){ return RGitBranch.findByName(name);}


}