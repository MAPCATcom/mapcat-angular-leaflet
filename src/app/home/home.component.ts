import { Component } from '@angular/core';
import * as L from 'leaflet';
global.Buffer = global.Buffer || require('buffer').Buffer;
const mapview = require ('../../../node_modules/@mapcat/mapview-init/src/mapcat-mapview-init.js');

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  ngOnInit() {
    // Initialize MAPCAT mapview
    mapview.initRasterView('NrP1WQLjuHTU220tHAbs3fzRdIg0nmhjMeL2pvwj', null, null, function(error, response) {
      if (error) {
        if (typeof(error) === 'object') {
          alert(error.message);
        } else {
          alert(error);
        }
      } else {
        // Initialize the map on leaflet.
        let map = L.map('map', {
          zoomControl: true,
          center: L.latLng(51.5, 0),
          zoom: 13,
          minZoom: 0,
          maxZoom: 18
        });

        L.tileLayer(response, {
          attribution: 'Imagery &copy; 2017 <a href="http://mapcat.com">MapCat</a>, Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a contributors',
          maxZoom: 18
        }).addTo(map);
      }
    });
  }
}
