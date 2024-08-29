import { TestIntegrationDetails } from "./testIntegrationDetails";

export interface TestIntegration {
    type:string;
    startDate: Date;
    duration : string;
    result: string;
    status: string;
    scenarioName: string;
    nbTestTotal : number;
    nbTestOk : number;
    nbTestKo : number;
    nbTestNa : number;
    nbTestWarn : number;
    pfName: string;
    machines: string;
    rebuildFrom:TestIntegration;
    testIntegrationDetails:TestIntegrationDetails[];

}