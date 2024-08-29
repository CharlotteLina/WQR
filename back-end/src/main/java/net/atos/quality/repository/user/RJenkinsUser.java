package net.atos.quality.repository.user;


import net.atos.quality.model.user.JenkinsUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RJenkinsUser extends JpaRepository<JenkinsUser, Long> {

    JenkinsUser findByName(String name);
}