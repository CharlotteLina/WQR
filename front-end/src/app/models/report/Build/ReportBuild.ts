import { BuildUnitTest } from "./BuildUnitTest";
import { Upsource } from "../Upsource/Upsource";

export interface ReportBuild {
    jenkinsUserName: string;
    startDate: Date;
    endDate: Date;
    buildType:string;
    status:string;
    jenkinsNumber:string;
    repository:string
    branch: string;
    rebuildFrom:ReportBuild;
    resultBuild:string;
    resultTU:string;
    resultSonar:string;
    resultUpsource:string;
    causeBuild:string;
    causeSonar:string;
    buildUnitTests:BuildUnitTest[];
    upsources:Upsource[];
    upsourceId:string;
    upsourceRepo:string;
    sonarKey:string;

}