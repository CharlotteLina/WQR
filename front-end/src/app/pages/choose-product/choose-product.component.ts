import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WqrService } from '../../services/wqr.service';
import { SelectProductComponent } from '../../component/home/select-product/select-product.component';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '../../pipe/translate.pipe';

@Component({
  selector: 'app-choose-product',
  standalone: true,
  imports: [CommonModule,SelectProductComponent,TranslatePipe],
  templateUrl: './choose-product.component.html',
  styleUrl: './choose-product.component.scss'
})
export class ChooseProductComponent {

  //Variable d'environnement 
  public environment = environment;

  //Service
  wqrService:WqrService = inject(WqrService);

  // Variable
  allProductName$!: Observable<string[]>;
  products!:string;
  errorMessage:boolean=false;

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(){
    this.products='';
    this.allProductName$= this.wqrService.getAllProductName();
 

  }

  // Ajout ou suppresion d'un produit dans la liste
  addProduct(productList: string) {
    this.products=productList;
  }


  // Validation des produits
  validateProduct(){
    if(this.products.length>0){
      localStorage.setItem(environment.storageProductName,this.products);
      this.router.navigate([environment.homePath]);

    }else{
      localStorage.setItem(environment.storageProductName,this.products);
      this.errorMessage = true
    }


  }
}



