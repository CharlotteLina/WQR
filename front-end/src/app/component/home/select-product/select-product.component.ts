import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { CardTitleComponent } from '../card-title/card-title.component';
import { WqrService } from '../../../services/wqr.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { TranslatePipe } from '../../../pipe/translate.pipe';

export interface productView {
  name: string;
  class:string;
  selected:boolean;
}

@Component({
  selector: 'app-select-product',
  standalone: true,
  imports: [TranslatePipe,FormsModule,MatButtonToggleModule,CardTitleComponent,MatGridListModule,CommonModule,MatCardModule,MatIconModule],
  templateUrl: './select-product.component.html',
  styleUrl: './select-product.component.scss'
})
export class SelectProductComponent {

  //Variable d'environnement 
  public environment = environment;

  // Service
  wqrService:WqrService = inject(WqrService);

  // Valeur d'entrée 
  @Input() allProductName!: string[];
  @Input() products!:string;

  // Valeur de sortie
  @Output() productEvent = new EventEmitter<string>();

  //Variables
  selectedProductName!:string[];
  allProductView:productView[]=new Array<productView>;


  // ----------------------------------------------------
  constructor(private router: Router) {}

  // ----------------------------------------------------
  ngOnInit(){
    this.selectedProductName = new Array<string>;

    let products= new Array
    if(this.products){
      products = this.products.split(',')
    }

    //Initialisation des noms de produit en fonction des noms déja selectionné
    this.allProductName.forEach(aProduct=>{
      console.log(aProduct)
      let isSelected=false;
      let className="";
      products.forEach(i=>{
        if(i==aProduct){
          isSelected=true;
          className="selected";
        }
      })
      if(aProduct!="COMPONENT"){
        this.allProductView.push({name:aProduct,class:className,selected:isSelected});
      }
    })
  }

  // ----------------------------------------------------
  selectedAProduct(value:string, multiple:boolean){
    this.allProductView.forEach(aProduct=>{
      if(aProduct.name==value){
        aProduct.selected = !aProduct.selected;
        if(aProduct.selected){
          aProduct.class="selected"
          this.selectedProductName.push(aProduct.name)
        }else {
          aProduct.class="";
          this.selectedProductName.splice(this.selectedProductName.indexOf(aProduct.name),1)

        }
      }else if(!multiple){
        if(aProduct.selected){
          aProduct.selected=!aProduct.selected
          aProduct.class=""
          this.selectedProductName.splice(this.selectedProductName.indexOf(aProduct.name),1)
        }

      }
    })


    this.productEvent.emit(this.selectedProductName.toString());
  }

  

}
