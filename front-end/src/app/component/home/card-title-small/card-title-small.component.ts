import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-title-small',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './card-title-small.component.html',
  styleUrl: './card-title-small.component.scss'
})
export class CardTitleSmallComponent {
  
  //Variable d'entrée 
  @Input() title!:string;
  @Input() icon!:string;

}