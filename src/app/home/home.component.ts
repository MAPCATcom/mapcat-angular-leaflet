import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  ngOnInit() {
    // Initialize the map on leaflet.
    let map = L.map('map', {
      zoomControl: false,
      center: L.latLng(47.4979, 19.0402),
      zoom: 13,
      minZoom: 0,
      maxZoom: 19
    });

    // We use Raster tiles from our other product Terkepem.hu which is a fantastic navigation tool for Hungary.
    L.tileLayer('https://terkepem.hu/tile/{z}/{x}/{y}.png', {
      attribution: 'Imagery &copy; 2017 GLI Solutions, Map data &copy;  OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
  }



}
