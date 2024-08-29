export interface BuildUnitTest {
    id : number;
    result: string;
    name:string;
    nbTestTotal : number;
    nbTestOk : number;
    nbTestKo : number;
    nbTestSkipped : number;
}