import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppserviceService } from '../../../services/appservice.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    public serv:AppserviceService,
    private viewportScroller: ViewportScroller
    ){

  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]); // Desplaza a la posición (0, 0)
  }

}
