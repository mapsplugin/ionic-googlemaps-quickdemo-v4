import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-html-info-window',
  templateUrl: './html-info-window.page.html',
  styleUrls: ['./html-info-window.page.scss'],
})
export class HtmlInfoWindowPage implements OnInit {

  map: GoogleMap;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: 35.685208, lng: -121.168225},
        zoom: 5
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    let htmlInfoWindow = new HtmlInfoWindow();

    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = [
      '<b>Hearst Castle</b>',
      '<img src="assets/imgs/hearst_castle.jpg">'
    ].join("");
    frame.getElementsByTagName("img")[0].addEventListener("click", () => {
      htmlInfoWindow.setBackgroundColor('red');
    });
    htmlInfoWindow.setContent(frame, {
      width: "280px",
      height: "330px"
    });

    let marker: Marker = this.map.addMarkerSync({
      position: {lat: 35.685208, lng: -121.168225},
      draggable: true,
      disableAutoPan: true
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      htmlInfoWindow.open(marker);
    });
    marker.trigger(GoogleMapsEvent.MARKER_CLICK);

  }
}
