import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapComponent } from '../../ui/googlemap/googlemap.component';
import { RouterModule } from '@angular/router';
import { AppserviceService } from '../../services/appservice.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, GooglemapComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(
    public serv:AppserviceService,
  ){}

}
