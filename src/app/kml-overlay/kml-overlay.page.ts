import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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

  constructor(public loadingCtrl: LoadingController) {}

  async ngOnInit() {
    this.loadMap();
  }

  async loadMap() {

    this.loading = await this.loadingCtrl.create({
      content: 'Please wait...'
    });
    await this.loading.present();

    this.map = GoogleMaps.create('map_canvas');
    let kmlOverlay: KmlOverlay = await this.map.addKmlOverlay({
      url: "assets/kmloverlay/polygon.kml"
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
