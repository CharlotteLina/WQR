export interface DeployPFDetails {
    id: number;
    startDate: Date;
    endDate: Date;
    name:string;
    jenkinsNumber:string;
    result:string;
    cause:string;
    machines:string;
    rebuildFrom:DeployPFDetails;
}