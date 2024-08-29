import { ReportResult } from "../ReportDetails/reportResult";
import { ReportBuild } from "./Build/ReportBuild";
import { DeployPF } from "./DeployPF/deployPF";
import { TestIntegration } from "./TestIntegration/testIntegration";
import { TestResultDetails } from "./TestIntegration/testResultDetails";

export interface Report {
    buildProductId:number;
    jenkinsUserName: string;
    startDate: Date;
    endDate: Date;
    name:string;
    jenkinsNumber:string;
    status:string;
    typeProduct:string;
    version:string;
    product:string
    branch: string;
    rebuildFrom:Report;
    buildProductParent:Report;
    builds:ReportBuild[];
    deployPF:DeployPF[]
    testIntegrations:TestIntegration[]
    component:Report[];

    currentResult:ReportResult;
    previousResult:ReportResult;

}