import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Marker,
  StreetViewPanorama,
  StreetViewCameraPosition,
  StreetViewLocation
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-street-view',
  templateUrl: './street-view.page.html',
  styleUrls: ['./street-view.page.scss'],
})
export class StreetViewPage implements OnInit {

  panorama: StreetViewPanorama;
  map: GoogleMap;
  marker: Marker;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    let initialPos: ILatLng = {lat: 42.345573, lng: -71.098326};

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: initialPos,
        zoom: 17
      }
    });
    // Create a map after the view is loaded.
    this.panorama = GoogleMaps.createPanorama('pano_canvas', {
      camera: {
        target: initialPos
      }
    });

    this.marker = this.map.addMarkerSync({
      flat: true,
      position: initialPos
    });

    // Move the marker position when the panorama camera has been moved.
    // (this.marker.position = this.panorama.position)
    this.panorama.bindTo('position', this.marker);

    // Move the map camera when the panorama camera has been moved.
    this.panorama.on(GoogleMapsEvent.PANORAMA_LOCATION_CHANGE).subscribe((params:any[]) => {
      let location: StreetViewLocation = params[0];
      this.map.animateCamera({
        target: location.latLng,
        duration: 1000
      });
    });

    // Change the marker bearing when the panorama camera is panning.
    this.panorama.on(GoogleMapsEvent.PANORAMA_CAMERA_CHANGE).subscribe((params: any[]) => {
      let camera: StreetViewCameraPosition = params[0];
      this.marker.setRotation(camera.bearing - 180);
    });

  }
}
