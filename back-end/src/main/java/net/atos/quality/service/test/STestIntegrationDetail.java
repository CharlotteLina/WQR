package net.atos.quality.service.test;

import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.model.test.TestIntegrationDetail;
import net.atos.quality.repository.test.RTestIntegrationDetail;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class STestIntegrationDetail {
    private RTestIntegrationDetail RTestIntegrationDetail;

    public STestIntegrationDetail(RTestIntegrationDetail RTestIntegrationDetail) {
        this.RTestIntegrationDetail = RTestIntegrationDetail;
    }

    public TestIntegrationDetail saveTestIntegrationDetail(TestIntegrationDetail test) {
        return RTestIntegrationDetail.save(test);
    }

    public List<TestIntegrationDetail> getAllTestIntegrationDetail() {
        return RTestIntegrationDetail.findAll();
    }

    public Optional<TestIntegrationDetail> getTestIntegrationDetailById(long id) {
        return RTestIntegrationDetail.findById(id);
    }

    public TestIntegrationDetail updateTestIntegrationDetail(TestIntegrationDetail updatedTest) {
        return RTestIntegrationDetail.save(updatedTest);
    }

    public void deleteTestIntegrationDetail(long id) {
        RTestIntegrationDetail.deleteById(id);
    }


}