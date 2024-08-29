package net.atos.quality.service.user;


import net.atos.quality.model.user.JenkinsUser;
import net.atos.quality.repository.user.RJenkinsUser;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SJenkinsUser {

    private RJenkinsUser rJenkinsUser;

    public SJenkinsUser(RJenkinsUser RJenkinsUser) {
        this.rJenkinsUser = RJenkinsUser;
    }

    public JenkinsUser saveJenkinsUser(JenkinsUser repository) {

        Optional<JenkinsUser> savedJenkinsUser = rJenkinsUser.findById(repository.getId());
        return rJenkinsUser.save(repository);
    }

    public List<JenkinsUser> getAllJenkinsUsers() {
        return rJenkinsUser.findAll();
    }

    public Optional<JenkinsUser> getJenkinsUserById(long id) {
        return rJenkinsUser.findById(id);
    }

    public JenkinsUser updateJenkinsUser(JenkinsUser updatedJenkinsUser) {
        return rJenkinsUser.save(updatedJenkinsUser);
    }

    public void deleteJenkinsUser(long id) {
        rJenkinsUser.deleteById(id);
    }

    public JenkinsUser getByName(String name) {
        return rJenkinsUser.findByName(name);
    }



}