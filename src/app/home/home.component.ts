import { Component } from '@angular/core';
import { Map } from "leaflet";
import * as L from 'leaflet';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor() {


  }

  ngOnInit() {
    //Initialize the map on leaflet.
    let map = L.map("map", {
      zoomControl: false,
      center: L.latLng(47.4979, 19.0402),
      zoom: 13,
      minZoom: 0,
      maxZoom: 19
    });

    //We use Raster tiles from our other product Terkepem.hu which is a fantastic navigation tool for Hungary.
    L.tileLayer('https://terkepem.hu/tile/{z}/{x}/{y}.png', {
      attribution: '© 2017 GLI Solutions, © OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    /*L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      accessToken: 'pk.eyJ1IjoieWVzaGFyc2hhIiwiYSI6ImNpeWViZWZhazAwOHAyd29obzZ1YTFwbGsifQ.DH-EqLaxn4A-hq0nlEtgmA'
    }).addTo(map);*/
  }



}
