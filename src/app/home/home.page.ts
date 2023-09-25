import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  baseMaps: any;

  constructor() {}
  // ngOnInit() {
   
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([35.76943, -5.80081], 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    //menambahkan basemap
    this.baseMaps = {
      'BaseMap1' : L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }),

      'BaseMap2' : L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'}),
    };

    this.baseMaps['BaseMap1'].addTo(this.map);
    var layerControl = L.control.layers(this.baseMaps).addTo(this.map);

    //menambahkan marker
    
    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    const marker = new L.Marker ([35.76943, -5.80081]);

    this.map.addLayer(marker);

    //menambahkan popup
    marker.bindPopup('this is popup marker');
  }
}
