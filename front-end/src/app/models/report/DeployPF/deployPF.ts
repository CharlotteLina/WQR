import { DeployPFDetails } from "./deployPFDetails";

export interface DeployPF {
    id: number;
    startDate: Date;
    endDate: Date;
    name:string;
    jenkinsNumber:string;
    result:string;
    pfName:string;
    machines:string;
    deployPFDetails:DeployPFDetails[];
}