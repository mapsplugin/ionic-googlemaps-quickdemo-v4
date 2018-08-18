import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  GroundOverlay
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-ground-overlay',
  templateUrl: './ground-overlay.page.html',
  styleUrls: ['./ground-overlay.page.scss'],
})
export class GroundOverlayPage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    let bounds: ILatLng[] = [
      {"lat": 40.712216, "lng": -74.22655},
      {"lat": 40.773941, "lng": -74.12544}
    ];
console.log('--->loadMap');
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: bounds
      }
    });

    let groundOverlay: GroundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/newark_nj_1922.jpg',
      'bounds': bounds,
      'opacity': 0.5,
      'clickable': true  // default = false
    });

    // Catch the GROUND_OVERLAY_CLICK event
    groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(() => {
      groundOverlay.setImage('assets/imgs/newark_nj_1922_2.jpg');
    });
  }
}
