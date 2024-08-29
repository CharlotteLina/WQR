import { Component, inject, Inject, Input, LOCALE_ID, model } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Report } from '../../../../models/report/Report';
import { TranslatePipe } from '../../../../pipe/translate.pipe';
import { environment } from '../../../../environments/environment';
import { CutRepoNamePipe } from '../../../../pipe/cut-repo-name.pipe';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface DialogData {
  reportType: string;
  report: Report;
  details:string;
}

export interface checkBox{
  name:string,
  value:boolean;
}


@Component({
  selector: 'app-pdf-generator',
  standalone: true,
  imports: [CommonModule,TranslatePipe,CutRepoNamePipe,ReplacePipe,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatIcon,MatCheckboxModule,FormsModule],
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.scss'
})
export class PdfGeneratorComponent {

  readonly dialogRef = inject(MatDialogRef<PdfGeneratorComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  reportType:string="WEATHER"
  report!:Report

  detailOption:Boolean=false;
  option!:checkBox[];
  readonly checked = model(false);
  readonly indeterminate = model(false);


  //Variable d'environnement 
  public environment = environment;

  valueType=''

  translatePipe:TranslatePipe=new TranslatePipe();
  cutRepoNamePipe:CutRepoNamePipe=new CutRepoNamePipe();
  replacePipe:ReplacePipe=new ReplacePipe();

  sonarUrl:string=environment.sonarUrl
  upsourceUrl:string=environment.upsourceUrl

  buildOptions:checkBox[]=[{name:'compilation',value:true},{name:'test unitaires',value:true},{name:'sonar',value:true},{name:'upsource',value:true}]
  deployOptions:checkBox[]=[]
  doc = new jsPDF('p', 'mm', [297, 210]);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){

    let type = this.route.snapshot.queryParamMap.get('type')
    if(type!=null){
      this.reportType=type
    }


    this.report=this.data.report
    this.report.deployPF.forEach(d=>{
      this.deployOptions.push({name:this.replacePipe.transform(d.pfName),value:true})
    })


    switch(this.reportType){
      case environment.buildType:
        this.option=this.buildOptions;
        this.detailOption = true;
        this.valueType='buildTypeLowerCase';
        break;
      case environment.deployType:
        this.option=this.deployOptions;
        this.detailOption = true;
        this.valueType='deployTypeLowerCase';
        break;
      case environment.testType:
        this.option=[]
        this.detailOption = false;
        this.valueType='testTypeLowerCase';
        break;
      case environment.weatherType:
        this.option=[]
        this.detailOption = false;
        this.valueType='weatherTypeLowerCase';
        break;

    }

    console.log(this.valueType)

  }


  displayPDF(){
    this.generatePDF();
    this.doc.output('dataurlnewwindow');
  }

  savePDF(){
    this.generatePDF();
    let pdfName = this.report.version+this.translatePipe.transform('report')+this.translatePipe.transform(this.valueType)+Date.now().toLocaleString()
    this.doc.save(pdfName+'.pdf');
  }

	generatePDF() {

    // Creation et en tête du document
    this.doc = new jsPDF();
		this.doc.setFontSize(16);
    let pos = 20;
		this.doc.text('WQR - '+this.translatePipe.transform('report')+' ' +this.translatePipe.transform(this.valueType), 10, pos);
    if(this.option.length>0){
      let details = " - "
      this.option.forEach(opt=>{
        if (opt.value){
          details += opt.name + " - " 
        }
      })
      this.doc.setFontSize(13).text(details,10,pos+=10)
    }
		this.doc.setFontSize(12).text(this.translatePipe.transform('version')+' : '+this.report.version,10,pos +=10);
		this.doc.text(this.translatePipe.transform('branch')+' : '+this.report.branch,10,pos +=5);
		this.doc.text('Date : '+new Date(this.report.startDate).toLocaleString() + ' > '+ new Date(this.report.endDate).toLocaleString(),10,pos +=5);
    pos+=25

    // RAPPORT METEO
    if (this.reportType==environment.weatherType){
      if(this.report.currentResult.buildResult!=environment.unknown){
        pos = this.addBuildReport(pos,this.buildOptions)
        pos=this.addPage(pos+10)
      }
      if(this.report.currentResult.deployResult!=environment.unknown){
        pos = this.addDeployReport(pos,this.deployOptions)
        pos=this.addPage(pos+10)
      }
      if(this.report.currentResult.testResult!=environment.unknown){
        this.addIntegrationTestReport(pos)
        pos=this.addPage(pos+10)
      }
    }
    // RAPPORT DE BUILD
    if (this.reportType==environment.buildType){
        this.addBuildReport(pos,this.option)
    }
    // RAPPORT DE DEPLOYMENT
    if (this.reportType==environment.deployType){
      this.addDeployReport(pos,this.option)
    }
    // RAPPORT DE TEST DINTEGRATION
    if (this.reportType==environment.testType){
      this.addIntegrationTestReport(pos)
    }

  }

  addBuildReport(position:number,o:checkBox[]){

    this.createHeaderReportType(position,'buildType',this.report.currentResult.buildResult)

    var data: any[][]=[] ;
    let prepare=[this.translatePipe.transform('name')]
    o.forEach(opt=>{
      if(opt.value){
        prepare.push(this.translatePipe.transform(opt.name))
      }
    })
    var headers=[prepare]
    this.report.builds.forEach(b=>{
      let aData=[]
      aData.push({content: this.cutRepoNamePipe.transform(b.repository), styles: { halign: 'center'}})
      if(o[0].value){aData.push({ content: this.translatePipe.transform(b.resultBuild), styles: { halign: 'center',fillColor:this.getBackgroundColor(b.resultBuild) }})}
      if(o[1].value){aData.push({ content: this.translatePipe.transform(b.resultTU), styles: { halign: 'center',fillColor:this.getBackgroundColor(b.resultTU) }})}
      if(o[2].value){aData.push({ content: this.translatePipe.transform(this.replacePipe.transform(b.resultSonar)), styles: { halign: 'center',fillColor:this.getBackgroundColor(b.resultSonar) }})}
      if(o[3].value){aData.push({ content: this.translatePipe.transform(b.resultUpsource), styles: { halign: 'center',fillColor:this.getBackgroundColor(b.resultUpsource) }})}
      data.push(aData)
   })

    this.createAutoTable(position+10,headers,data)

    let lastPosition = (this.doc as any).lastAutoTable.finalY
    if((this.doc as any).lastAutoTable.finalY>250){lastPosition=290}
    let i=this.addPage(15+lastPosition);
    
    // Create detail of each repository not success
    this.doc.text('Details :',10,i);
    this.report.builds.forEach(b=>{
      //Mise en place de detail uniquement lors des résultats différents de success ou inconnu
      if((b.resultBuild!=environment.success && o[0].value)|| (b.resultTU!=environment.success && b.resultTU!=environment.unknown &&b.resultTU!=environment.na && o[1].value) || (b.resultSonar!=environment.ok && b.resultSonar!='_OK_' && b.resultSonar!=environment.na && b.resultSonar!=environment.notanalyzed && b.resultSonar!=environment.unknown && o[2].value)|| (b.resultUpsource!=environment.success && b.resultUpsource!=environment.ok && b.resultUpsource!=environment.na && b.resultUpsource!=environment.unknown && o[3].value)){          
        
        
        i=this.addPage(i+10)
        this.doc.line(10, i-5, 190, i-5);
        this.doc.setFont('Helvetica','bold').text(this.cutRepoNamePipe.transform(b.repository),10,i).setFont('Helvetica','normal');
        
        // Résultat Compilation
        if(b.resultBuild!=environment.success && o[0].value){
          i=this.addPage(i+8);  
          this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(b.resultBuild)).text(this.translatePipe.transform('compilation')+' - '+this.replacePipe.transform(b.resultBuild).toLocaleLowerCase(),20,i).setTextColor('black').setFont('Helvetica','normal')
          this.createIcon('assets/images/jenkinsIcon.png','Jenkins Link ',b.causeBuild,i,6.5)
        }
        // Résultat TU
        if(b.resultTU!=environment.success && b.resultTU!=environment.unknown &&b.resultTU!=environment.na && o[1].value){
          i=this.addPage(i+8);  
          this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(b.resultTU)).text(this.translatePipe.transform('tu')+' - '+this.replacePipe.transform(b.resultTU).toLocaleLowerCase(),20,i).setTextColor('black').setFont('Helvetica','normal')
          this.createIcon('assets/images/jenkinsIcon.png','Jenkins Link ',b.causeBuild,i,6.5)

          // Tableau des TU 
          headers =[[this.translatePipe.transform('name'),'TOTAL','OK','KO','SKIP']];
          data=[] ;
          b.buildUnitTests.forEach(bTU=>{
            if(bTU.result==environment.failure || bTU.result==environment.warning){
              let nameSplit = bTU.name.split('.')
              data.push([{ content:nameSplit[nameSplit.length-2], styles: { halign: 'center',fillColor:this.getBackgroundColor(bTU.result),maxCellHeight:8}},{ content: bTU.nbTestTotal, styles: { halign: 'center'}},{ content: bTU.nbTestOk, styles: { halign: 'center'}},{ content: bTU.nbTestKo, styles: { halign: 'center'}},{ content: bTU.nbTestSkipped, styles: { halign: 'center'}} ])  
            }
          })
          i=this.addPage(i+5);  
          this.createAutoTable(i,headers,data)
          i=(this.doc as any).lastAutoTable.finalY;                 
        }

        // Résultat Sonar
        if(b.resultSonar!=environment.ok && b.resultSonar!='_OK_' && b.resultSonar!=environment.na && b.resultSonar!=environment.notanalyzed && b.resultSonar!=environment.unknown&& o[2].value){
          i=this.addPage(i+8);  
          let sonarUrlRepo =this.sonarUrl+'dashboard?branch='+b.branch+'&id='+b.sonarKey
          this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(b.resultSonar)).text(this.translatePipe.transform('sonar')+' - '+this.replacePipe.transform(b.resultSonar).toLocaleLowerCase(),20,i).setTextColor('black').setFont('Helvetica','normal')
          this.createIcon('assets/images/sonarIcon.png','Sonar Link ',sonarUrlRepo,i,5)
        }

        // Résultat Upsource 
        if( b.resultUpsource!=environment.success && b.resultUpsource!=environment.ok && b.resultUpsource!=environment.na && b.resultUpsource!=environment.unknown&& o[3].value){
          i=this.addPage(i+8);  
          let upsourceRepo = this.upsourceUrl+b.upsourceId+'/branch/'+b.branch
          this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(b.resultUpsource)).text(this.translatePipe.transform('upsource')+' - '+this.replacePipe.transform(b.resultUpsource).toLocaleLowerCase(),20,i).setTextColor('black').setFont('Helvetica','normal')
          this.createIcon('assets/images/upsourceIcon.png','Upsource Link ',upsourceRepo,i,6)
                        
              // Tableau des Upsources
              headers =[['',this.translatePipe.transform('type'),this.translatePipe.transform('information'),this.translatePipe.transform('author'),this.translatePipe.transform('reviewerNotFinish')]];
              data=[] ;
              b.upsources.forEach(bUpsource=>{
                let raisedValue=''
                let color=''
                if(bUpsource.raised){
                  raisedValue=this.translatePipe.transform('refused')
                  color='red'
                }
                data.push([{ content: raisedValue, styles: { halign: 'center',maxCellHeight:8, textColor:color }},{ content:this.translatePipe.transform(bUpsource.type), styles: { halign: 'center'}},{ content:bUpsource.information, styles: { halign: 'center'}},{ content: bUpsource.author, styles: { halign: 'center'}},{ content: bUpsource.reviewerNotFinish, styles: { halign: 'center'}} ])  
                
              })
              i=this.addPage(i+3);  
              this.createAutoTable(i,headers,data)
              i=this.addPage((this.doc as any).lastAutoTable.finalY)
        }

          i+=10;

      }
    })
    return i
  }

  addDeployReport(position:number,o:checkBox[]){

    this.createHeaderReportType(position,'deployType',this.report.currentResult.deployResult)

    // Part for each PF
    let i=position+10;
    this.report.deployPF.forEach(d=>{
      let isSelected=false
      o.forEach(opt=>{
        if(opt.name==this.replacePipe.transform(d.pfName)){
          isSelected=opt.value
        }
      })

      if(isSelected){
        i=this.addPage(i+10);
        this.doc.line(10, i-8, 190, i-8);
        this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(d.result)).text(this.replacePipe.transform(d.pfName)+' - '+this.replacePipe.transform(d.result),10,i).setTextColor('black').setFont('Helvetica','normal')
        i=this.addPage(i+8);
        this.doc.text('Details :',10,i);

        d.deployPFDetails.forEach(dd=>{      
          
          i=this.addPage(i+6);
          this.doc.setFont('Helvetica','bold').setTextColor(this.getTextColor(dd.result)).text(this.replacePipe.transform(dd.name)+' - '+this.replacePipe.transform(dd.result),20,i).setTextColor('black').setFont('Helvetica','normal');
          this.createIcon('assets/images/jenkinsIcon.png','Jenkins Link ',environment.jenkinsUrl+dd.name+"/"+dd.jenkinsNumber,i,6.5)

          i=this.addPage(i+6);
          this.doc.text("- Machines :",20,i)
          let y = 45;
          dd.machines.split(',').forEach(machine=>{
            if(y+10>200){
              i=i+6
              y=45
            }
            this.doc.text(machine+",",y,i)
            y+=26;
            
          })

          if(dd.result!="SUCCESS"){
            i=this.addPage(i+6);
            this.doc.text("- Cause :"+dd.cause,23,i)
          }
          i=this.addPage(i+10)

      })
    }

  })
  return i


  }

  addIntegrationTestReport(position:number){

    this.createHeaderReportType(position,'testType',this.report.currentResult.testResult)

		// Create main table
    var headers = [[this.translatePipe.transform('name'),this.translatePipe.transform('type'), this.translatePipe.transform('pfName'),'Date',this.translatePipe.transform('duration'),'Total','OK','KO','NA','WARN']];
    var data: any[][]=[] ;
    this.report.testIntegrations.forEach(ti=>{
      let nameSplit = ti.scenarioName.split('/')
      data.push([{ content: nameSplit[nameSplit.length-1].split('.ssn')[0] , styles: { halign: 'center',fillColor:this.getBackgroundColor(ti.result)}},
        { content: ti.type, styles: { halign: 'center'}},
        { content: this.replacePipe.transform(ti.pfName), styles: { halign: 'center' }},
        { content: new Date(ti.startDate).toLocaleString() , styles: { halign: 'center' }},
        { content: ti.duration, styles: { halign: 'center' }},
        { content: ti.nbTestTotal, styles: { halign: 'center',fontStyle:'bold' }},
        { content: ti.nbTestOk, styles: { halign: 'center' , textColor:'green'}},
        { content: ti.nbTestKo, styles: { halign: 'center' ,textColor:'red'}},
        { content: ti.nbTestNa, styles: { halign: 'center' }},
        { content: ti.nbTestWarn, styles: { halign: 'center',textColor:'orange' }},
      ]) })

    this.createAutoTable(position+10,headers,data)

  }

  addPage(i:number){
    if(i>=290){
      this.doc.addPage()
      return 10;
    }
    return i;
  }

  getBackgroundColor(result:string){

    let color:string=''
    result = this.replacePipe.transform(result)
    if(result=="FAILURE" || result =="ERROR"){
      color='#FDD9D7'
    }
    if(result =="NOT ANALYZED" || result =='UNKNOWN'){
      color="#d1cece"
    }
    if(result=="WARNING"){
      color='#f8f5d7'
    }
    if(result=="UNSTABLE"){
      color='#FFEACC'
    }
    if(result=="SUCCESS"){
      color='#DBEFDC'
    }

    return color
  }

  getTextColor(result:string){

    let color:string=''
    result = this.replacePipe.transform(result)
    if(result=="FAILURE" || result =="ERROR"){
      color='#eb4747'
    }
    if(result =="NOT ANALYZED" || result =='UNKNOWN'){
      color="#797979"
    }
    if(result=="WARNING"){
      color='#ebd619'
    }
    if(result=="UNSTABLE"){
      color='#FF9800'
    }
    if(result=="SUCCESS"){
      color='#4CAF50'
    }

    return color
  }

  createHeaderReportType(position:number,type:string,result:string){
    this.doc.line(10, position-10, 190, position-10);
    this.doc.line(10, position-9, 190, position-9);
    this.doc.setFontSize(15)
    this.doc.text(this.translatePipe.transform('globalResult')+this.translatePipe.transform('ofe')+" "+this.translatePipe.transform(type).toLocaleLowerCase()+" : ",10,position)
    this.doc.setTextColor(this.getTextColor(result)).text(this.translatePipe.transform(result),150,position).setTextColor('black');              
		this.doc.setFontSize(12);
  }

  createAutoTable(startY:number,headers:any[],data:any[][]){
    autoTable(this.doc, {
      startY: startY, 
      theme:'grid',
      head: headers,
      headStyles:{fillColor:'black',textColor:'white',halign:'center'},
      body: data,
    })
  }

  createIcon(iconPath:string,iconName:string,url:string, position:number,height:number){
    var img = new Image()
    img.src = iconPath
    this.doc.setTextColor('white').textWithLink(iconName, 180, position-3, {url:url})
    this.doc.setTextColor('black');
    this.doc.addImage(img, 'png', 180, position-5, 20, height)
  }

}