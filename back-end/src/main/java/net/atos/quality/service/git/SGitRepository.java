package net.atos.quality.service.git;

import net.atos.quality.model.git.GitRepository;
import net.atos.quality.repository.git.RGitRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SGitRepository {
    private RGitRepository gitRepositoryRepository;

    public SGitRepository(RGitRepository gitRepositoryRepository) {
        this.gitRepositoryRepository = gitRepositoryRepository;
    }

    public GitRepository saveRepository(GitRepository repository) {

        Optional<GitRepository> savedRepository = gitRepositoryRepository.findById(repository.getId());
        return gitRepositoryRepository.save(repository);
    }

    public List<GitRepository> getAllRepositorys() {
        return gitRepositoryRepository.findAll();
    }

    public Optional<GitRepository> getRepositoryById(long id) {
        return gitRepositoryRepository.findById(id);
    }

    public GitRepository updateRepository(GitRepository updatedRepository) {
        return gitRepositoryRepository.save(updatedRepository);
    }

    public void deleteRepository(long id) {
        gitRepositoryRepository.deleteById(id);
    }

    public GitRepository getRepositoryByName(String name) {
        return gitRepositoryRepository.findByName(name);
    }

}