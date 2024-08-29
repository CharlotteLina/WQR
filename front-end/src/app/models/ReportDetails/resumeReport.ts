
export interface ResumeReport {
    id: number;
    product: string;
    version: string;
    start_date:Date;
    result_global:string;
    result_build:string;
    result_deploy:string;
    result_test:string;

    branch:string;
    status:string;
}