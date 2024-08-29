import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/home/menu/menu.component';
import { environment } from './environments/environment';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  //Variable d'environnement 
  public environment = environment;

  // Variables
  title = environment.title;

  constructor(private router: Router){}

  
  ngOnInit(){

    this.router.events.subscribe((event) => {
      let startUrl=''
      let endUrl = ''

      if(event instanceof NavigationStart){
        startUrl=(event as NavigationStart).url
      }
      if (event instanceof NavigationEnd) {
        endUrl=(event as NavigationEnd).url

        if((event as NavigationEnd).url=="/"){
          this.router.navigate([environment.choosePath]);
        }
      }

    })



  }



}
