import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Circle,
  Marker,
  Spherical
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
})
export class CirclePage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    let center: ILatLng = {"lat": 32, "lng": -97};

    let radius = 300;  // radius (meter)

    // Calculate the positions
    let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
      return Spherical.computeOffset(center, radius, degree);
    });

    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': positions,
        'padding': 100
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    let marker: Marker = this.map.addMarkerSync({
      position: positions[0],
      draggable: true,
      title: 'Drag me!'
    });
    marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    let circle: Circle = this.map.addCircleSync({
      'center': center,
      'radius': radius,
      'strokeColor' : '#AA00FF',
      'strokeWidth': 5,
      'fillColor' : '#00880055'
    });

    marker.on('position_changed').subscribe((params: any) => {
      let newValue: ILatLng = <ILatLng>params[1];
      let newRadius: number = Spherical.computeDistanceBetween(center, newValue);
      circle.setRadius(newRadius);
    });
  }

}
