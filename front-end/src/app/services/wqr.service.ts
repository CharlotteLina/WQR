import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/product/_productModel';
import {environment} from '../environments/environment';
import {Observable, Subscription, map, throwError} from 'rxjs';
import {ResumeReport} from '../models/ReportDetails/resumeReport';
import {Report} from '../models/report/Report';
import {Graph} from '../models/compare/Graph';
import {ReportCompare} from '../models/compare/ReportCompare';


@Injectable({
  providedIn: 'root'
})
export class WqrService {


  constructor(private http: HttpClient) {
  }


  /*************************
   Méthode pour les headers
   **************************/

  getAuthorization() {
    return {
      headers: new HttpHeaders({'Authorization': environment.basicAuth})
    };
  }

  getResumeCompareOption(startDate: string, endDate: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': environment.basicAuth,
      'startDate': startDate,
      'endDate': endDate
    });
  }

  getResumeCompareBuildDetailOption(startDate: string, endDate: string, name: string, buildProducts: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': environment.basicAuth,
      'startDate': startDate,
      'endDate': endDate,
      'name': name,
      'buildProducts': buildProducts,
    });
  }

  /*************************
   Méthode accès a l'API
   **************************/

  // Récupération de tous les noms de produit
  getAllProductName(): Observable<string[]> {
    return this.http.get<string[]>(environment.backUrl + "production/buildProduct/model", this.getAuthorization());
  }

  // Récupération de tous les types de rapport
  getAllReportType(): Observable<string[]> {
    return this.http.get<string[]>(environment.backUrl + "production/report/type", this.getAuthorization());
  }

  // Récupération des 10 derniers résumés de rapport pour un ou plusieurs produit
  getReportResume(product: string): Observable<ResumeReport[]> {

    let params = new HttpParams();
    params = params.append('product', product);

    return this.http.get<ResumeReport[]>(environment.backUrl + "production/report/resume",{headers:new HttpHeaders({
        'Authorization': environment.basicAuth}),params:params});
  }

  // Récupération de l'ensemble des versions pour un produit et un type de rapport
  getAllVersionForProductAndReportType(product: string, report: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(environment.backUrl + "production/report/" + report + "/" + product, this.getAuthorization());
  }

  // Récupération d'un rapport
  getAReport(id: string): Observable<Report> {
    return this.http.get<Report>(environment.backUrl + "production/report/" + id, this.getAuthorization());
  }

  // Récupération d'une comparaison d'un type de rapport pour un produit sur une période donnée
  getACompare(type: string, product: string, startDate: string, endDate: string): Observable<ReportCompare> {
    return this.http.get<ReportCompare>(environment.backUrl + "production/compare/" + product + "/" + type, {headers: this.getResumeCompareOption(startDate, endDate)});

  }

  // Récupération d'une comparaison pour un repository sur une période donnée
  getACompareDetailsRepositorty(startDate: string, endDate: string, name: string, buildProducts: string): Observable<Graph> {
    return this.http.get<Graph>(environment.backUrl + "production/compare/repository", {headers: this.getResumeCompareBuildDetailOption(startDate, endDate, name, buildProducts)});

  }

  // Récupération d'une comparaison pour un repository sur une période donnée
  getACompareReportBrancheDetail(startDate: string, endDate: string, name: string, buildProducts: string): Observable<Graph> {
    return this.http.get<Graph>(environment.backUrl + "production/compare/branche", {headers: this.getResumeCompareBuildDetailOption(startDate, endDate, name, buildProducts)});

  }

}

