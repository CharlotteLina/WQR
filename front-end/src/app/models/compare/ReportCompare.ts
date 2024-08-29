import { Graph } from "./Graph";
import { Indicator } from "./Indicator";

export interface ReportCompare {
    value: any;
    level: any;
    idBuildProduct:Number[];
    graphList:Graph[];
    indicatorList:Indicator[];
}