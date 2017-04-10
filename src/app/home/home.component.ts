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

    L.tileLayer('https://terkepem.hu/tile/{z}/{x}/{y}.png', {
      attribution: 'Imagery &copy; 2017 <a href="http://mapcat.com">MapCat</a>, Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a contributors',
      maxZoom: 18
    }).addTo(map);
  }



}
