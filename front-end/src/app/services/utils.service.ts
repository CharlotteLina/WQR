import { EventEmitter, Injectable, inject } from '@angular/core';
import { WqrService } from './wqr.service';
import { Observable, of } from 'rxjs';
import { Report } from '../models/report/Report';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  wqrService:WqrService = inject(WqrService);

  constructor() { }

  /*Fonction de comparaison de number ou string (Pour les tableaux)
  *Arg : a      => number | string  : Première valeur à comparer
  *Arg : b      => number | string  : Deuxieme valeur à comparer
  *Arg : isAsc  => boolean          : Permet de connaitre le sens de tri (croissant - décroissant) 
  *Return : L'odre entre les deux valeurs 
  */
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  /*Fonction pour récupérer la couleur d'un résultat de résumé
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorResumeResult(result:String){
    let css:String ="resumeResult ";
      switch(result){
        case "ABORTED":
          css += "abortedBackground"
          break;
        case "PENDING":
          css += "pendingBackground"
          break;
        case"FAILURE":
        case"KO":
          css += "failureBackground"
          break;
        case"UNSTABLE":
          css += "unstableBackground"
          break;
        case "SUCCESS":
        case "OK":
          css += "successBackground"
          break;
        case "UNKNOWN":
        case "N/A":
          css += "unknownBackground"
          break;
        case "WARNING":
          css += "warningBackground"
          break;
        default:
          break;
      }
      return css;

  }




  /*Fonction pour récupérer la couleur d'un résultat pour les boutons de rapport
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorButtonResult(result:String){
    let css:String ="buttonReport ";
      switch(result){
        case "ABORTED":
          css += "abortedBackground"
          break;
        case "PENDING":
          css += "pendingBackground"
          break;
        case"FAILURE":
        case"KO":
          css += "failureBackground"
          break;
        case"UNSTABLE":
          css += "unstableBackground"
          break;
        case "SUCCESS":
        case "OK":
          css += "successBackground"
          break;
        case "UNKNOWN":
        case "N/A":
          css += "unknownBackground"
          break;
        case "WARNING":
          css += "warningBackground"
          break;
        default:
          break;
      }
      return css;

  }



  /*Fonction pour récupérer la couleur d'un résultat d'un rapport
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorReportResult(result:String){
    let css:String ="reportResult ";
    switch(result){
      case"FAILURE":
      case"KO":
      case"ERROR":
        css += "failureBackground"
        break;
      case"UNSTABLE":
       css +=  "unstableBackground"
        break;
      case "SUCCESS":
      case "OK":
      case "_OK_":
       css +=  "successBackground"
        break;
      case "UNKNOWN":
      case "NOT ANALYZED":
      case "N/A":
       css +=  "unknownBackground"
        break;
      case "WARNING":
      case "SKIPPED":
       css +=  "warningBackground"
        break;
      case "PENDING":
       css +=  "pendingBackground"
        break;
      case "ABORTED":
        css += "abortedBackground"
        break;
      default:
        return ""
    }
    return css;
  }

  /*Fonction pour récupérer la couleur pour les section d'un rapport météo
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorWeatherDetailsResult(result:String,type:String){
    let css:String ="";
    if(type=="title"){
      css="weatherTitleResult "
    }else if(type=="details"){
      css="navigate weatherDetailsResult "
    }
    switch(result){
      case"FAILURE":
      case"KO":
        if(type=="title"){css+="failureResultDark "}
        css+="failureBackgroundLight"
        break;
      case"UNSTABLE":
      if(type=="title"){css+="unstableResultDark "}
      css+="unstableBackgroundLight"
      break;
      case "SUCCESS":
      case "OK":
        if(type=="title"){css+="successResultDark "}
        css+="successBackgroundLight"
        break;
      case "UNKNOWN":
      case "N/A":
        if(type=="title"){css+="unknownResultDark "}
        css+="unknownBackgroundLight"
        break;
      case "WARNING":
        if(type=="title"){css+="warningResultDark "}
        css+="warningBackgroundLight"
        break;
      case "PENDING":
        if(type=="title"){css+="pendingResultDark "}
        css+="pendingBackgroundLight"
        break;
      case "ABORTED":
        if(type=="title"){css+="abortedResultDark "}
        css+="abortedBackgroundLight"
        break;

      default:
        return ""
    }
    return css;
  }

  /*Fonction pour récupérer la couleur pour les sections enfant d'un rapport météo
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorWeatherDetailsCase(result:String){
      let css:String ="weatherDetailsCase ";
      switch(result){
        case"FAILURE":
        case"KO":
          css+="failureBackgroundDark"
          break;
        case"UNSTABLE":
        css+="unstableBackgroundDark"
        break;
        case "SUCCESS":
        case "OK":
          css+="successBackgroundDark"
          break;
        case "UNKNOWN":
        case "N/A":
          css+="unknownBackgroundDark"
          break;
        case "WARNING":
          css+="warningBackgroundDark"
          break;
        case "PENDING":
          css+="pendingBackgroundDark"
          break;
        case "ABORTED":
          css+="abortedBackgroundDark"
          break;
        default:
          return ""
      }
      return css;
  }



  getArrowCardHeaderTitle(result:String,previousResult:String){
    let css:String='levelArrowCircleRight '
    switch(result){
      case"FAILURE":
        css+= "levelArrowFailure "
        break;
      case"UNSTABLE":
      css+= "levelArrowUnstable "
        break;
      case "SUCCESS":
        css+= "levelArrowSuccess "
        break;
      case "UNKNOWN":
        css+= "levelArrowUnknown "
        break;
      case "PENDING":
        css+= "levelArrowPending "
        break;
      case "ABORTED":
        css+= "levelArrowAborted "
        break;
      default:
        break;
    }

      if(result!=previousResult){
        if((result=="SUCCESS" && (previousResult == "UNSTABLE " || previousResult =="FAILURE")||(result=="UNSTABLE" && previousResult=="FAILURE"))){
          css += "levelArrowPreviousSuccess"
        }else{
          css += "levelArrowPreviousFailure"
        }
      }

    return css;

  }

  /*Fonction pour récupérer la couleur pour les résultat d'un rapport de build ou de déploiement
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorBuildAndDeployResult(result:String){
    let css:String='buildReportResult '
      switch(result){
        case"FAILURE":
        case"KO":
        case"ERROR":
          css+= "failureBackgroundLight"
          break;
        case"UNSTABLE":
        css+= "unstableBackgroundLight"
          break;
        case "SUCCESS":
        case "OK":
        case "_OK_":
          css+= "successBackgroundLight"
          break;
        case "UNKNOWN":
        case "NOT ANALYZED":
        case "N/A":
          css+= "unknownBackgroundLight"
          break;
        case "WARNING":
        case "SKIPPED":
          css+= "warningBackgroundLight"
          break;
        case "PENDING":
          css+= "pendingBackgroundLight"
          break;
        case "ABORTED":
          css+= "abortedBackgroundLight"
          break;
        default:
          return css;
      }
      return css;
  }

  /*Fonction pour récupérer la couleur d'un icon
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getIconColor(result:String){
    let css:String='icon '
    switch(result){
      case"FAILURE":
      case"KO":
      case"ERROR":
        css+= "iconFailure"
        break;
      case"UNSTABLE":
      css+= "iconUnstable"
        break;
      case "SUCCESS":
      case "OK":
        css+= "iconSuccess"
        break;
      case "PENDING":
        css+= "iconPending"
        break;
      case "ABORTED":
        css+= "iconAborted"
        break;
      case "WARNING":
        css+= "iconWarning"
        break;
      default:
        return css;
    }
    return css;
  }
  
  /*Fonction pour récupérer la couleur d'une review refusé
  *Arg : raised   => string       : Personne ayant refusé la review
  *Return : La class correspondant au résultat 
  */
  getRaised(raised:string){

    if(raised!=''){
      return "failureBackgroundLight"
    }
    return ""
  }

  /*Fonction pour récupérer la couleur des options des tests unitaires sur les rapports de build
  *Arg : result   => string       : Résultat dont on veut connaitre la class
  *Return : La class correspondant au résultat 
  */
  getColorTU(result:String){
    let css:String='tuResult '
    switch(result){
      case"FAILURE":
      case"KO":
      case"ERROR":
        css+= "failureBackgroundLight"
        break;
      case"UNSTABLE":
      css+= "unstableBackgroundLight"
        break;
      case "SUCCESS":
      case "OK":
        css+= "successBackgroundLight"
        break;
      case "UNKNOWN":
      case "N/A":
        css+= "unknownBackgroundLight"
        break;
      case "WARNING":
      case "SKIPPED":
        css+= "warningBackgroundLight"
        break;
      case "PENDING":
        css+= "pendingBackgroundLight"
        break;
      case "ABORTED":
        css+= "abortedBackgroundLight"
        break;
      default:
        return css;
    }
    return css;

  }



  getCardViewColor(status:String,weatherResult:String){
    let css="cardView ";
    if(status!="PENDING"){
      switch(weatherResult){
        case"FAILURE":
          css+= "cardViewFailure"
          break;
        case"UNSTABLE":
        css+= "cardViewUnstable"
          break;
        case "SUCCESS":
          css+= "cardViewSuccess"
          break;
        default:
          break;
      }
    }
    return css;
  }


}