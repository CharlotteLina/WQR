import { DeployResultDetails } from "../report/DeployPF/deployResultDetail";
import { TestResultDetails } from "../report/TestIntegration/testResultDetails";

export interface ReportResult {
    globalResult:string;

    buildResult:string;
    compilationResult:string;
    testUnitaireResult:string;
    sonarResult:string;
    upsourceResult:string;

    deployResult:string;
    deployResultDetails: DeployResultDetails[];

    testResult:string;
    testResultDetails: TestResultDetails[];
}