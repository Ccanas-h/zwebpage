import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./modules/interfaz/components/navbar/navbar/navbar.component";
import { AppserviceService } from './modules/interfaz/services/appservice.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'duhalde-ortodoncia';


  constructor(
    public serv:AppserviceService,
  ){}

}
