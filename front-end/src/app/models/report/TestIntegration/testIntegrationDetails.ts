export interface TestIntegrationDetails {
    id : number;
    startDate: Date;
    endDate : Date;
    result: string;
    status: string;
    scenarioName: string;
    nbTestTotal : number;
    nbTestOk : number;
    nbTestKo : number;
    nbTestNa : number;
    nbTestWarn : number;
    details: string;
}