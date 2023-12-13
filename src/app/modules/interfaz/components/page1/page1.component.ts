import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from '../../ui/googlemap/googlemap.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CommonModule, GooglemapComponent
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
