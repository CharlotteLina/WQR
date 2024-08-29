package net.atos.quality.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.sql.DataSource;
import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

/*Classe pour la sécurité de l'API */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    /*Classe pour encoder un mot de passe */
    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    /*Definition des droits de l'API  */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // @formatter:off
        http
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers(HttpMethod.GET).hasRole("READ")
                        .requestMatchers(HttpMethod.POST).hasRole("WRITE")
                        .requestMatchers(HttpMethod.PUT).hasRole("WRITE")
                        .requestMatchers(HttpMethod.DELETE).hasRole("DELETE")
                        .anyRequest().authenticated()
                )
                .httpBasic(withDefaults()).cors(cors -> cors.configurationSource(corsDefaultConfiguration()))
                .formLogin(withDefaults());

        return http.build();
    }

    /* Définition du cors : Permet d'interagir avec les ressources d'un autre domaine*/
    CorsConfigurationSource corsDefaultConfiguration() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200","http://sandbox-fab.sics:8086","https://wqr.sics"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Requestor-Type"));
        configuration.addAllowedHeader("product");
        configuration.addAllowedHeader("report");
        configuration.addAllowedHeader("startDate");
        configuration.addAllowedHeader("endDate");
        configuration.addAllowedHeader("name");
        configuration.addAllowedHeader("buildProducts");
        configuration.addAllowedHeader("versionProduct");
        configuration.addAllowedHeader("type");
        configuration.addAllowedHeader("productName");
        configuration.addAllowedHeader("reportType");
        configuration.setExposedHeaders(Arrays.asList("X-Get-Header"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    /*Definition des roles de l'API */
    @Bean
    public InMemoryUserDetailsManager userDetailsService() {

        UserDetails jenkinsRead = User.builder()
                .username("JENKINS-READ")
                .password(passwordEncoder().encode("eBHXZcmw8yMTIRv"))
                .roles("READ")
                .build();

        UserDetails jenkinsWrite = User.builder()
                .username("JENKINS-WRITE")
                .password(passwordEncoder().encode("g8sWkA166xsQr06"))
                .roles("READ","WRITE")
                .build();

        UserDetails admin = User.builder()
                .username("ADMIN")
                .password(passwordEncoder().encode("f&Ps7O52vMS6Ul7"))
                .roles("READ","WRITE","DELETE")
                .build();
        return new InMemoryUserDetailsManager(jenkinsRead, jenkinsWrite, admin);
    }

}