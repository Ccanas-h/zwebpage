import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from '../../ui/googlemap/googlemap.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AppserviceService } from '../../services/appservice.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CommonModule, GooglemapComponent, RouterModule, FooterComponent
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  serv = inject(AppserviceService);

}
