import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WqrService } from '../../../services/wqr.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ProductModel } from '../../../models/product/_productModel';
import { Observable, first, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { ProductSelectedComponent } from '../../home/product-selected/product-selected.component';
import { environment } from '../../../environments/environment';
import { env } from 'process';
import { TranslatePipe } from '../../../pipe/translate.pipe';


export interface User {
  name: string;
}

@Component({
  selector: 'app-generate-report-choice',
  standalone: true,
  imports: [TranslatePipe,MatIconModule,CommonModule,MatFormFieldModule,MatSelectModule,FormsModule,MatInputModule,MatAutocompleteModule,ReactiveFormsModule,AsyncPipe,RouterLink,RouterLinkActive,ProductSelectedComponent],
  templateUrl: './generate-report-choice.component.html',
  styleUrl: './generate-report-choice.component.scss'
})


export class GenerateReportChoiceComponent {


  //Variable d'environnement 
  public environment = environment;

  //Service
  wqrService:WqrService = inject(WqrService)

  //Variable
  errorMessage!:string
  errorMessageHelp!:string

  allReportType$!: string[];
  allProductVersion$!: ProductModel[];
  emptyProductVersion!: ProductModel;

  controlSelectedProductName = new FormControl('');
  filteredOptionProductName!: string[];

  controlSelectedReportType = new FormControl('');
  filteredOptionReportType!: Observable<string[]>;

  controlSelectedProductVersion = new FormControl<string | ProductModel>('');
  filteredOptionProductVersion!: Observable<ProductModel[]>;

  branchNameSelected!:string;
  idBuildProduct!:string;


  constructor(private router: Router) {}

  ngOnInit(){

    let allReportType = this.wqrService.getAllReportType();
    //Recuperer les différents nom de type de rapport
    allReportType.pipe(first()).subscribe(val => {

      this.filteredOptionReportType = this.controlSelectedReportType.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value;
          return name ? this._filterString(name as string,this.allReportType$) : this.allReportType$;
        }),
      );

      this.controlSelectedReportType.setValue((val[0]).toLowerCase())
      this.allReportType$=val

     //Recuperer les différents nom de produit 

     if (typeof localStorage !== 'undefined') {
      let productSelected = localStorage.getItem(environment.storageProductName);
        if(productSelected){
          this.filteredOptionProductName=productSelected.split(',')
          this.controlSelectedProductName.setValue(this.filteredOptionProductName[0])
        }else{
          this.router.navigate([environment.choosePath]);
        }
      }else{
          this.router.navigate([environment.choosePath]);
      }
      this.selectProductVersionOrReportType()

    });
  }

  /*
    Modification de la liste des versions de produit disponible pour un produit
    Mise a jour des variables allProductVersion$ , controlSelectedProductVersion et filteredOptionProductVersion
  */ 
  selectProductVersionOrReportType() {
      this.allProductVersion$ = new Array<ProductModel>
      let allProductVersion$

      //Si on choisit un produit spécifique alors on récupère la liste des versions du produit sinon on récupère l'ensemble des produit
      if(this.controlSelectedProductName.value && this.controlSelectedReportType.value){
        allProductVersion$ = this.wqrService.getAllVersionForProductAndReportType(this.controlSelectedProductName.value,this.controlSelectedReportType.value.toUpperCase())
    
      }
      //Récupération de la liste des versions produits
      if(allProductVersion$){
        allProductVersion$.subscribe(val => {
        this.allProductVersion$ = val.slice();
        this.filteredOptionProductVersion = this.controlSelectedProductVersion.valueChanges.pipe(
          startWith(''),
          map(value => {
            const productVersion = typeof value === 'string' ? value : value?.version;
            return productVersion ? this._filterProduct(productVersion as string,this.allProductVersion$) : this.allProductVersion$;
          }),
        );
        if(this.allProductVersion$.length>0){
          this.controlSelectedProductVersion.setValue(this.allProductVersion$[0])

          this.branchNameSelected = this.allProductVersion$[0].branch
          let id=this.allProductVersion$[0].id
          this.idBuildProduct = id.toString()
        }else{
          this.controlSelectedProductVersion.setValue(this.emptyProductVersion)
          this.branchNameSelected =""
          this.idBuildProduct="0"
        }
      })
    }
  }

  /*
    Affichage de la branche de la version produit selectionné
  */
  selectBranchAndIdOfProduct(){
    let version = typeof this.controlSelectedProductVersion.value === 'string' ? this.controlSelectedProductVersion.value : this.controlSelectedProductVersion.value?.version
    let branch = typeof this.controlSelectedProductVersion.value === 'string' ? this.controlSelectedProductVersion.value : this.controlSelectedProductVersion.value?.branch
    let id = typeof this.controlSelectedProductVersion.value === 'string' ? this.controlSelectedProductVersion.value : this.controlSelectedProductVersion.value?.id
    if(branch && branch !=version && id){
      this.branchNameSelected=branch
      this.idBuildProduct=id.toString()
    } else{
      this.branchNameSelected=""
      this.idBuildProduct="0"

    }

  }

  /*
    Fonction de génération d'un rapport avec vérification de l'ensemble des champs
  */
  generateReport(){

    let value = this.controlSelectedProductVersion.value

    // Initialisation des messages d'erreurs
    this.errorMessage = ""
    this.errorMessageHelp= ""

    //Vérification des parametres du type de rapport
    this.errorMessageHelp = environment.availableType+this.allReportType$
    if(!this.controlSelectedReportType.value){
      this.errorMessage = environment.typeMissing
      return
    } else if(this.allReportType$.indexOf(this.controlSelectedReportType.value.toUpperCase())==-1){
      this.errorMessage = environment.typeisNotCorrect+this.controlSelectedReportType.value+environment.isNotCorrect;
      return
    }

    //Vérification du nom du produit 
    this.errorMessageHelp = environment.availableProduct+this.filteredOptionProductName
    const productName = typeof value === 'string' ? value : value?.product;
    if(!this.controlSelectedProductName.value){
      this.errorMessage = environment.productMissing
      return
    }
    else if(this.filteredOptionProductName.indexOf(this.controlSelectedProductName.value)==-1){
      this.errorMessage = environment.productisNotCorrect+this.controlSelectedProductName.value+environment.isNotCorrect
      return
    }

    //Verification de la version produit
    this.errorMessageHelp = ""
    const productVersion= typeof value === 'string' ? value : value?.version;
    if(!productVersion){
      this.errorMessage = environment.versionMissing
      return
    }
    else if (productName==productVersion){
      this.errorMessage = environment.versionIsNotCorrect+productVersion+environment.isNotCorrect
      return
    }
  
    // On dirige vers la page du type de rapport généré
    if(this.errorMessage==""){
      let queryParams ={ queryParams: { 'type':this.controlSelectedReportType.value.toUpperCase(),'productName': productName ,'productVersion': productVersion, 'id': this.idBuildProduct } }
        this.router.navigate([environment.generateReportPath],queryParams);
    }

  }

  /*
    Ensemble de méthodes pour afficher les valeurs des champs autocomplete et des filtres 
  */
  displayFnString(value: string): string {
    return value  ? value : '';
  }
  private _filterString(name: string, listString :string[]): string[] {
    const filterValue = name.toLowerCase();
    return listString.filter(option => option.toLowerCase().includes(filterValue));
  }
  displayFnProduct(product: ProductModel): string {
    return product && product.version ? product.version : '';
  }
  private _filterProduct(versionProduit: string,products:ProductModel[]): ProductModel[] {
    const filterValue = versionProduit.toLowerCase();
    return products.filter(option => option.version.toLowerCase().includes(filterValue));
  }

}
