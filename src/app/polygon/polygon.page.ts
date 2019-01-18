import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Polygon,
  BaseArrayClass,
  ILatLng,
  LatLng
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.page.html',
  styleUrls: ['./polygon.page.scss'],
})
export class PolygonPage implements OnInit {

  map: GoogleMap;

  GORYOKAKU_POINTS: ILatLng[] = [
    {lat: 41.79883, lng: 140.75675},
    {lat: 41.799240000000005, lng: 140.75875000000002},
    {lat: 41.797650000000004, lng: 140.75905},
    {lat: 41.79637, lng: 140.76018000000002},
    {lat: 41.79567, lng: 140.75845},
    {lat: 41.794470000000004, lng: 140.75714000000002},
    {lat: 41.795010000000005, lng: 140.75611},
    {lat: 41.79477000000001, lng: 140.75484},
    {lat: 41.79576, lng: 140.75475},
    {lat: 41.796150000000004, lng: 140.75364000000002},
    {lat: 41.79744, lng: 140.75454000000002},
    {lat: 41.79909000000001, lng: 140.75465}
  ];

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: this.GORYOKAKU_POINTS
      }
    });

    let polygon: Polygon = this.map.addPolygonSync({
      'points': this.GORYOKAKU_POINTS,
      'strokeColor' : '#AA00FF',
      'fillColor' : '#00FFAA',
      'strokeWidth': 10
    });

    let points: BaseArrayClass<ILatLng> = polygon.getPoints();

    points.forEach((latLng: ILatLng, idx: number) => {
      let marker: Marker = this.map.addMarkerSync({
        draggable: true,
        position: latLng
      });
      marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe((params) => {
        let position: LatLng = params[0];
        points.setAt(idx, position);
      });
    });

  }
}
