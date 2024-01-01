import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
    public serv: AppserviceService,
    private viewportScroller: ViewportScroller,
  ) {

  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]); // Desplaza a la posición (0, 0)
  }

  scrollToBottom() {
    // Obtén la altura total de la página
    const scrollHeight = document.documentElement.scrollHeight;
    // Desplaza a la posición correspondiente a la parte inferior de la página
    this.viewportScroller.scrollToPosition([0, scrollHeight]);
  }







}
