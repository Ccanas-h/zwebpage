import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from '../../page1/page1.component';
import { AppserviceService } from '../../../services/appservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  Page1Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public serv: AppserviceService ){
    
  }

}
