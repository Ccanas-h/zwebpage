import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * as mapboxgl from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { AppserviceService } from '../../services/appservice.service';
@Component({
  selector: 'app-googlemap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})

export class GooglemapComponent implements OnInit {

  serv = inject(AppserviceService);


  ngOnInit(): void {

    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2NhbmFzIiwiYSI6ImNscTV4OWVoMjBubTMybG52b3Axa2ppMXQifQ.dVPS491K5PJfDht2d9O-1A';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-70.60848278944323, -33.42219945364881], // starting position [lng, lat]
      zoom: 17, // starting zoom
      interactive: true,
      maxZoom: 20,
      minZoom: 15,
      scrollZoom: false,
      // trackResize: false
      testMode: true //QUITAR ESTO EN PROD
    });


          // Create a default Marker and add it to the map.
      const marker1 = new mapboxgl.Marker()
      .setLngLat([-70.60848278944323, -33.42219945364881])
      .addTo(map);

  }
}
