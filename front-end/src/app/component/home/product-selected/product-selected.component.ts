import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-selected.component.html',
  styleUrl: './product-selected.component.scss'
})
export class ProductSelectedComponent {

  //Variable d'environnement 
  public environment = environment;

  //Variable de sortie 
  @Output() productsEvent :EventEmitter<string> = new EventEmitter<string>();

  // Variables
  products!:string;
  
  constructor(private router: Router) {}

  ngOnInit(){
    this.products='';
    let productSelected;

    if (typeof localStorage !== 'undefined') {
      productSelected = localStorage.getItem(environment.storageProductName);
    }
    if(productSelected){
      this.products=productSelected
      this.productsEvent.emit(productSelected);


    }
    else{
      this.changeProduct();
    }
  }

  changeProduct(){
    this.router.navigate([environment.choosePath]);  
  }
}
