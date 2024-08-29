import { Component, inject } from '@angular/core';
import { WqrService } from '../../../services/wqr.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter} from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { ProductSelectedComponent } from '../../home/product-selected/product-selected.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipe/translate.pipe';
import { environment } from '../../../environments/environment';


  export interface User {
    name: string;
  }

  @Component({
    selector: 'app-compare-report-choice',
    standalone: true,
    imports: [TranslatePipe,ProductSelectedComponent,MatIconModule,MatDatepickerModule,MatNativeDateModule,CommonModule,MatFormFieldModule,MatSelectModule,FormsModule,MatInputModule,MatAutocompleteModule,ReactiveFormsModule,AsyncPipe,RouterLink,RouterLinkActive],
    providers:[MatDatepickerModule,MatNativeDateModule],
    templateUrl: './compare-report-choice.component.html',
    styleUrl: './compare-report-choice.component.scss'
  })

  export class CompareReportChoiceComponent {

  //Variable d'environnement
    public environment = environment;

    // Service
    wqrService:WqrService = inject(WqrService)

    // Variables
    myControl = new FormControl('');
    options!: string[] ;
    filteredOptionProductName!: string[];
    controlSelectedProductName=new FormControl;

    allReportType!:string[];
    controlSelectedReportType = new FormControl('');
    filteredOptionReportType: string[]=['BUILD','DEPLOY'];

    errorMessage:string="";

    range = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    });

    constructor(private router: Router, private dateAdapter: DateAdapter<Date>,) {
      this.dateAdapter.getFirstDayOfWeek = () => 1;
    }


    ngOnInit() {

      if (typeof localStorage !== 'undefined') {
        let productSelected = localStorage.getItem("productSelect");
          if(productSelected){
            this.filteredOptionProductName=productSelected.split(',')
            this.controlSelectedProductName.setValue(this.filteredOptionProductName[0])
          }else{
            this.router.navigate([environment.choosePath]);
          }
        }else{
            this.router.navigate([environment.choosePath]);
        }


        this.controlSelectedReportType.setValue(this.filteredOptionReportType[0]);
  }


    // Generer la comparaison
    generateCompare(){
      let startDate = this.range.get("start")?.value
      let endDate = this.range.get("end")?.value

     if(this.errorMessage==""){
        let queryParams ={ queryParams: { 'type':this.controlSelectedReportType.value?.toUpperCase(),'productName': this.controlSelectedProductName.value ,'date':this.createDateFormat(startDate),'to':this.createDateFormat(endDate) } }
          this.router.navigate([environment.compareReportPath],queryParams);
      }


    }

    // Création du format de la date
    createDateFormat(date:any){
      let month ="";
      if(((date?.getMonth()?date.getMonth():0)+1).toString().length==1){
        month = "0"+month.toString();
      }else{
        month = ((date?.getMonth()?date.getMonth():0)+1).toString()
      }
      let dateFormat = date?.getFullYear()+"-"+this.formatMonthAndDay(((date?.getMonth()?date.getMonth():0)+1).toString())+"-"+this.formatMonthAndDay((date?.getDate()?date.getDate():0).toString())
      return dateFormat;

    }

    // Mise en forme de la date
    formatMonthAndDay(value:string){
      if(value.length==1){
        value="0"+value
      }
      return value
    }
  }
