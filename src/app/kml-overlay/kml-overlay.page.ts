import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  KmlOverlay,
  Polygon,
  ILatLng
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-kml-overlay',
  templateUrl: './kml-overlay.page.html',
  styleUrls: ['./kml-overlay.page.scss'],
})
export class KmlOverlayPage implements OnInit {

  map: GoogleMap;
  loading: any;

  constructor(public loadingCtrl: LoadingController, private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  async loadMap() {

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    this.map = GoogleMaps.create('map_canvas');
    let kmlOverlay: KmlOverlay = await this.map.addKmlOverlay({
      url: "assets/kmloverlay/KML_Samples.kml",
      icon: "green"
    });

    this.loading.dismiss();

    console.log(kmlOverlay);

    this.map.moveCamera(kmlOverlay.getDefaultViewport());

    // You can get additional information
    kmlOverlay.on(GoogleMapsEvent.KML_CLICK).subscribe((params: any) => {
      let overlay: Polygon = params[0]; // depends on overlay
      let latLng: ILatLng = params[1];
      console.log(overlay, latLng);
    });

  }
}
