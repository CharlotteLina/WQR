import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule, Sort } from '@angular/material/sort';
import { UtilsService } from '../../../../services/utils.service';
import { ReportBuild } from '../../../../models/report/Build/ReportBuild';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CutRepoNamePipe } from '../../../../pipe/cut-repo-name.pipe';
import { BuildUnitTest } from '../../../../models/report/Build/BuildUnitTest';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../pipe/translate.pipe';



export interface tuCheckBox{
  name:string,
  value:boolean;
}

@Component({
  selector: 'app-generate-report-display-build-details',
  standalone: true,
  imports: [TranslatePipe,CommonModule, MatSortModule, MatIconModule, GenerateReportDisplayBuildDetailsComponent,MatCardModule,FontAwesomeModule,CutRepoNamePipe,ReplacePipe,MatCheckboxModule,ReactiveFormsModule,FormsModule],
  templateUrl: './generate-report-display-build-details.component.html',
  styleUrl: './generate-report-display-build-details.component.scss'
})


export class GenerateReportDisplayBuildDetailsComponent {

  //Variable d'environnement 
  public environment = environment;

  // Services
  utils:UtilsService = inject(UtilsService);
  
  //Variable d'entrée
  @Input() build!: ReportBuild;
  @Input() detail!: String;

  // Variables
  typeName:tuCheckBox[]=[{name:environment.failure,value:true},{name:environment.warning,value:false},{name:environment.success,value:false},{name:environment.unknown,value:false}]

  globalResult =environment.unstable

  errorOnCompilation:boolean=false;
  errorOnTU:boolean=false;
  errorOnSonar:boolean=false;
  errorOnUpsource:boolean=false;

  sonarUrl:string=environment.sonarUrl
  upsourceUrl:string=environment.upsourceUrl
  tuUrl:string=environment.jenkinsUrl
  displayedColumnTU: string[] = [environment.firstCol,environment.nameCol,environment.nbTestCol,environment.nbTestOkCol,environment.nbTestErrorCol,environment.nbTestSkippedCol];
  displayedColumnUpsource: string[] = [environment.firstCol,environment.typeCol,environment.infoCol,environment.authorCol,environment.reviewerNotFinishCol];

  visible:boolean = true
  visibleTU:boolean = true
  visibleUpSource:boolean = true

  unitTests!:BuildUnitTest[];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){

    //Initialisation du logo
    if(this.build.resultBuild==environment.failure || this.build.resultTU==environment.failure || this.build.resultSonar==environment.ko  || this.build.resultSonar==environment.error || this.build.resultUpsource==environment.failure  ){
      this.globalResult=environment.failure
    }
    if(this.build.resultBuild==environment.success && this.build.resultSonar==environment.ok && this.build.resultUpsource==environment.success && this.build.resultTU==environment.warning){
      this.globalResult=environment.warning
      };
    

    if(this.build.resultTU==environment.warning){
      this.typeName.forEach(type => {if(type.name==environment.warning){type.value=true;}})

    }

    //Recuperation des résultats de chaque partie
    if(this.build.resultBuild!=environment.success){this.errorOnCompilation=true}
    if(this.build.resultTU!=environment.success&&this.build.resultTU!=environment.unknown&&this.build.resultTU!=environment.na){this.errorOnTU=true}
    if(this.build.resultSonar!="_"+environment.ok+"_"&&this.build.resultSonar!=environment.ok&&this.build.resultSonar!=environment.unknown&&this.build.resultSonar!=environment.notanalyzed&&this.build.resultSonar!=environment.na){this.errorOnSonar=true}
    if(this.build.resultUpsource!=environment.success&&this.build.resultUpsource!=environment.unknown){this.errorOnUpsource=true}


    //Récuperation des tests unitaires
    this.unitTests = new Array<BuildUnitTest>;
    this.changeUnitTest("");
    if(this.build.buildType==environment.maven){this.tuUrl+=environment.buildMaven}else if(this.build.buildType==environment.gradle){this.tuUrl+=environment.buildGradle}
    if(this.build.jenkinsNumber!=""){this.tuUrl+="/"+this.build.jenkinsNumber+environment.testReportUrl}

    this.upsourceUrl+='/'+this.build.upsourceId+'/branch'+this.build.branch
    this.sonarUrl+='/dashboard?id='+this.build.sonarKey

  }

  displayDetails(){
    this.visible = !this.visible
  }

  displayDetailsTu(){
    this.visibleTU = !this.visibleTU
  }


  displayDetailsUpsource (){
    this.visibleUpSource = !this.visibleUpSource
  }
  changeUnitTest(value:any){
    
    let failure:boolean;
    let unstable:boolean;
    let warning:boolean;
    let success:boolean;
    let unknown:boolean;

    this.typeName.forEach(type=>{
      if(value==type){
        type.value=!type.value
      }
      if(type.name==environment.failure){failure=type.value}
      if(type.name==environment.unstable){unstable=type.value}
      if(type.name==environment.warning){warning=type.value}
      if(type.name==environment.success){success=type.value}
      if(type.name==environment.unknown){unknown=type.value}
    })

    this.unitTests = new Array<BuildUnitTest>;
    this.build.buildUnitTests.forEach(unitTest=>{
      if(failure && (unitTest.result==environment.failure)){
          this.unitTests.push(unitTest)
      }
      if(unstable && (unitTest.result==environment.unstable)){
        this.unitTests.push(unitTest)
    }
      if(success && (unitTest.result==environment.success)){
        this.unitTests.push(unitTest)
      }
      if(unknown && (unitTest.result==environment.unknown)){
        this.unitTests.push(unitTest)
      }
      if(warning && (unitTest.result==environment.warning)){
        this.unitTests.push(unitTest)
      }
    })

    }


    /*Trie des tableau de test unitaire
  *Return : La tableau trié en fonction de la colonne selectionné
  */
  sortData(sort: Sort) {
    const data = this.unitTests.slice();
    if (!sort.active || sort.direction === '') {
      this.unitTests = data;
      return;
    }


    this.unitTests = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case environment.nbTestErrorCol:
          return this.utils.compare(a.nbTestKo, b.nbTestKo, isAsc);
        case environment.nbTestCol:
          return this.utils.compare(a.nbTestTotal, b.nbTestTotal, isAsc);
        case environment.nbTestSkippedCol:
          return this.utils.compare(a.nbTestSkipped, b.nbTestTotal, isAsc);        
        case environment.nbTestOkCol:
          return this.utils.compare(a.nbTestOk, b.nbTestOk, isAsc);       
        case environment.firstCol:
            return this.utils.compare(a.result, b.result, isAsc);     
        case environment.nameCol:
          return this.utils.compare(a.name, b.name, isAsc);     
        default:
          return 0;
      }
    });
  }
  
}


