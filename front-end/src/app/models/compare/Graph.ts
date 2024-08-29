import { Data } from "./Data";


export interface Graph {
    title: string;
    type:string;
    value:string;
    axeXName : string;
    axeYName : string;
    dataList : Data[];

}