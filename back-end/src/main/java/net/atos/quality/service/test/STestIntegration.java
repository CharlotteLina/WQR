package net.atos.quality.service.test;

import net.atos.quality.model.test.TestIntegration;
import net.atos.quality.repository.test.RTestIntegration;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class STestIntegration {
    private RTestIntegration testRepository;

    public STestIntegration(RTestIntegration testRepository) {
        this.testRepository = testRepository;
    }

    public TestIntegration saveTest(TestIntegration test) {return testRepository.save(test);}

    public List<TestIntegration> getAllTests() {
        return testRepository.findAll();
    }

    public Optional<TestIntegration> getTestById(long id) {
        return testRepository.findById(id);
    }

    public TestIntegration updateTest(TestIntegration updatedTest) {
        return testRepository.save(updatedTest);
    }

    public void deleteTest(long id) {
        testRepository.deleteById(id);
    }




}