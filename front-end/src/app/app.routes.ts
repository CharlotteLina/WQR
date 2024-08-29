import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenerateReportComponent } from './pages/generate-report/generate-report.component';
import { CompareReportComponent } from './pages/compare-report/compare-report.component';
import { GenerateReportDisplayComponent } from './pages/generate-report-display/generate-report-display.component';
import { ChooseProductComponent } from './pages/choose-product/choose-product.component';
import { CompareReportDisplayComponent } from './pages/compare-report-display/compare-report-display.component';

export const routes: Routes = [

    // Page de choix du produit 
    {
        path: 'choose',
        component:ChooseProductComponent ,
        title: 'Choisir un produit',
    },
    
    // Page d'accueil
    {
        path: 'home',
        component:HomeComponent ,
        title: 'Accueil',
    },

    // Page de generation de rapport
    {
        path: 'generate',
        component:GenerateReportComponent ,
        title: 'Choix de generation de report',
    },
    {
        path: 'generate/report',
        component:GenerateReportDisplayComponent ,
        title: 'Generer un report ',
    },

    // Page de comparaison
    {
        path: 'compare',
        component:CompareReportComponent ,
        title: 'Choix de la comparaison des report',
    },
    {
        path: 'compare/report',
        component:CompareReportDisplayComponent ,
        title: 'Comparaison des report',
    },

];
