import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-googlemap',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})
export class GooglemapComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  
}
