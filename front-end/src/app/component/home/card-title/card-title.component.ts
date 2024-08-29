import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  
  //Variable d'entrée 
  @Input() title!:string;
  @Input() icon!:string;

}
