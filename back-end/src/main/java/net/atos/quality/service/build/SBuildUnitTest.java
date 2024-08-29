package net.atos.quality.service.build;

import net.atos.quality.model.build.BuildUnitTest;
import net.atos.quality.repository.build.RBuildUnitTest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SBuildUnitTest {
    private RBuildUnitTest RBuildUnitTest;

    public SBuildUnitTest(RBuildUnitTest RBuildUnitTest) {
        this.RBuildUnitTest = RBuildUnitTest;
    }

    public BuildUnitTest saveUnitTest(BuildUnitTest buildUnitTest) {

        Optional<BuildUnitTest> savedUnitTest = RBuildUnitTest.findById(buildUnitTest.getId());
        return RBuildUnitTest.save(buildUnitTest);
    }

    public List<BuildUnitTest> getAllUnitTests() {
        return RBuildUnitTest.findAll();
    }

    public Optional<BuildUnitTest> getUnitTestById(long id) {
        return RBuildUnitTest.findById(id);
    }

    public BuildUnitTest updateUnitTest(BuildUnitTest updatedBuildUnitTest) {
        return RBuildUnitTest.save(updatedBuildUnitTest);
    }

    public void deleteUnitTest(long id) {
        RBuildUnitTest.deleteById(id);
    }


}