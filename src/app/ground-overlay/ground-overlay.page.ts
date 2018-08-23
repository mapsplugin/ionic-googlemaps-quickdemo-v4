import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  GroundOverlay,
  Marker
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-ground-overlay',
  templateUrl: './ground-overlay.page.html',
  styleUrls: ['./ground-overlay.page.scss'],
})
export class GroundOverlayPage implements OnInit {

  map: GoogleMap;
  groundOverlay: GroundOverlay;
  marker1: Marker;
  marker2: Marker;

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

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: bounds
      }
    });

    this.marker1 = this.map.addMarkerSync({
      'position': bounds[0],
      'draggable': true
    });
    this.marker2 = this.map.addMarkerSync({
      'position': bounds[1],
      'draggable': true
    });
    this.marker1.on('position_changed').subscribe(this.redrawGroundOverlay.bind(this));
    this.marker2.on('position_changed').subscribe(this.redrawGroundOverlay.bind(this));
    this.marker1.trigger(GoogleMapsEvent.MARKER_CLICK);

    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/newark_nj_1922.jpg',
      'bounds': bounds,
      'opacity': 0.5,
      'clickable': true  // default = false
    });

    // Catch the GROUND_OVERLAY_CLICK event
    this.groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(() => {
      this.groundOverlay.setImage('assets/imgs/newark_nj_1922_2.jpg');
    });

  }

  redrawGroundOverlay() {
    this.groundOverlay.setBounds([
      this.marker1.getPosition(),
      this.marker2.getPosition()
    ]);
  }
}
