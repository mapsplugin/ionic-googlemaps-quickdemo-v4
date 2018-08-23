import { Component, OnInit, NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  ILatLng,
  Polyline,
  Spherical,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-base-array-class',
  templateUrl: './base-array-class.page.html',
  styleUrls: ['./base-array-class.page.scss'],
})
export class BaseArrayClassPage implements OnInit {

  map: GoogleMap;
  distance: string;

  constructor(private _ngZone: NgZone, private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    let points: Array<ILatLng> = [
      {lat: 33.91636924837674, lng: -118.39605331420898},
      {lat: 33.90205144970967, lng: -118.39639663696288},
      {lat: 33.90190897196702, lng: -118.37905883789062},
      {lat: 33.89471353635718, lng: -118.3787155151367}
    ];
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: points
      }
    });
    let polyline: Polyline = this.map.addPolylineSync({
      points: points
    });
    let baseArray: BaseArrayClass<ILatLng> = polyline.getPoints();

    baseArray.mapAsync((point: ILatLng, next: (newElement: any) => void) => {
      this.map.addMarker({
        'position': point,
        'draggable': true,
        'icon': 'blue'
      }).then(next);
    }).then((markers: Marker[]) => {

      let baseArray2: BaseArrayClass<Marker> = new BaseArrayClass<Marker>(markers);
      baseArray2.forEach((marker: Marker, idx: number) => {
        marker.on('position_changed').subscribe((params) => {
          baseArray.setAt(idx, params[1]);
        });
      });

      // trigger the position_changed event for the first calculation.
      markers[0].trigger('position_changed', null, markers[0].getPosition());
    });

    baseArray.on('set_at').subscribe(() => {
      this._ngZone.run(() => {
        let distanceMeter: number = Spherical.computeLength(baseArray);
        this.distance = (distanceMeter * 0.000621371192).toFixed(2) + " miles";
      });
    });

  }
}
