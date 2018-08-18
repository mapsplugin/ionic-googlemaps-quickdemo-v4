import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Polyline,
  LatLng,
  Marker
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.page.html',
  styleUrls: ['./polyline.page.scss'],
})
export class PolylinePage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    let HND_AIR_PORT = {lat: 35.548852, lng: 139.784086};
    let SFO_AIR_PORT = {lat: 37.615223, lng: -122.389979};
    let HNL_AIR_PORT = {lat: 21.324513, lng: -157.925074};
    let AIR_PORTS = [
      HND_AIR_PORT,
      HNL_AIR_PORT,
      SFO_AIR_PORT
    ];

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: AIR_PORTS
      }
    });

    let polyline: Polyline = this.map.addPolylineSync({
      points: AIR_PORTS,
      color: '#AA00FF',
      width: 10,
      geodesic: true,
      clickable: true  // clickable = false in default
    });

    polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
      let position: LatLng = <LatLng>params[0];

      let marker: Marker = this.map.addMarkerSync({
        position: position,
        title: position.toUrlValue(),
        disableAutoPan: true
      });
      marker.showInfoWindow();
    });
  }

}
