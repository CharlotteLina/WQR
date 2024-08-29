import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { HomeComponent } from '../../../pages/home/home.component';
import { GenerateReportComponent } from '../../../pages/generate-report/generate-report.component';
import { CompareReportComponent } from '../../../pages/compare-report/compare-report.component';
import { Router, RouterLink,RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';
import { TranslatePipe } from '../../../pipe/translate.pipe';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslatePipe,MatIconModule,MatDividerModule,MatMenuModule,CommonModule,MatButtonModule,MatToolbarModule,HomeComponent,GenerateReportComponent,CompareReportComponent,RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  //Variable d'environnement 
  public environment = environment;

  changeLanguage(value:string){
    localStorage.setItem('language',value)
    window.location.reload();
    
  }
}