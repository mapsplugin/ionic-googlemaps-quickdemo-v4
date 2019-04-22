import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Geocoder,
  BaseArrayClass,
  GeocoderResult,
  Marker
} from '@ionic-native/google-maps';
import { LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.page.html',
  styleUrls: ['./geocoding.page.scss'],
})
export class GeocodingPage implements OnInit {

  map1: GoogleMap;
  map2: GoogleMap;
  loading: any;
  @ViewChild('search_address') search_address: ElementRef;

  constructor(public loadingCtrl: LoadingController, private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap1();
    await this.loadMap2();
  }

  loadMap1() {
    console.log(this.search_address);
    (this.search_address as any).value = '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States';
    this.map1 = GoogleMaps.create('map_canvas1');
  }

  async onButton1_click(event) {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.map1.clear();

    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": 'Универмаг белгород'
    })
    .then((results: GeocoderResult[]) => {
      console.log(results);
      this.loading.dismiss();

      if (results.length > 0) {
        let marker: Marker = this.map1.addMarkerSync({
          'position': results[0].position,
          'title':  JSON.stringify(results[0].position)
        });
        this.map1.animateCamera({
          'target': marker.getPosition(),
          'zoom': 17
        });

        marker.showInfoWindow();
      } else {
        alert("Not found");
      }
    });
  }


  loadMap2() {
    this.map2 = GoogleMaps.create('map_canvas2', {
      camera: {
        target: [
          {"lat": 37.789, "lng": -122.38},
          {"lat": 32.909, "lng": -117.181}
        ]
      }
    });
  }
  async onButton2_click(event) {
    this.map2.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    let start = Date.now();

    // Geocode multiple location
    Geocoder.geocode({

      // Google office locations in California, USA
      "address": [
        "19510 Jamboree Road, Irvine, CA 92612, United States",
        "803 11th Avenue, Sunnyvale, CA 94089, United States",
        "6420 Sequence Dr, Suite 400, San Diego, CA 92121, United States",
        "345 Spear Street, San Francisco, CA 94105, United States",
        "901 Cherry Avenue, San Bruno, CA 94066, United States",
        "12422 W. Bluff Creek Drive,Playa Vista, CA 90094,United States",
        "1600 Amphitheatre Parkway,Mountain View, CA 94043,United States",
        "340 Main Street,Los Angeles, CA 90291,United States",
      ]
    })
    .then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {

      mvcArray.on('insert_at').subscribe((params: any[]) => {
        const index: number = params[0];
        const result: GeocoderResult = mvcArray.getAt(index);
        this.map2.addMarkerSync({
          'position': result[0].position,
          'title':  JSON.stringify(result)
        });
      });
      mvcArray.one('finish').then(() => {
        this.loading.dismiss();
        let end = Date.now();
        alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");

        let results: any[] = mvcArray.getArray();
        console.log(results);
      });

    });
  }
}
