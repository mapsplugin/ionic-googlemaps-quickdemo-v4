import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-tile-overlay',
  templateUrl: './tile-overlay.page.html',
  styleUrls: ['./tile-overlay.page.scss'],
})
export class TileOverlayPage implements OnInit {

  map: GoogleMap;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {

    this.map = GoogleMaps.create('map_canvas');

    this.map.addTileOverlaySync({
      getTile: (x: number, y: number, zoom: number) => {
        return `http://tile.stamen.com/watercolor/${zoom}/${x}/${y}.jpg`;
      }
    });
  }
}
