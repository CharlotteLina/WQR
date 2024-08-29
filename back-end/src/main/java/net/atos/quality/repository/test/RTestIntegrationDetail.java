package net.atos.quality.repository.test;

import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RTestIntegrationDetail extends JpaRepository<TestIntegrationDetail, Long> {

    TestIntegrationDetail findByTestIntegration(TestIntegration test);

}
