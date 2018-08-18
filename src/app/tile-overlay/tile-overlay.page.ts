import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tile-overlay',
  templateUrl: './tile-overlay.page.html',
  styleUrls: ['./tile-overlay.page.scss'],
})
export class TileOverlayPage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
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
