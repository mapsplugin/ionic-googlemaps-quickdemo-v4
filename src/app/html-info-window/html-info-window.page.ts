import { Component, OnInit, NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-html-info-window',
  templateUrl: './html-info-window.page.html',
  styleUrls: ['./html-info-window.page.scss'],
})
export class HtmlInfoWindowPage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform, private _ngZone: NgZone) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
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

    // flip-flop contents
    // https://davidwalsh.name/css-flip
    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = `
<div class="flip-container" id="flip-container">
  <div class="flipper">
    <div class="front">
    <h3>Click this photo!</h3>
    <img src="assets/imgs/hearst_castle.jpg">
  </div>
  <div class="back">
    <!-- back content -->
    Hearst Castle above the clouds on top of The Enchanted Hill. William Randolph Hearst started to build a fabulous estate on his ranchland overlooking the village of San Simeon in 1919.
    </div>
  </div>
</div>`;

    frame.addEventListener("click", (evt) => {
      let container = document.getElementById('flip-container');
      if (container.className.indexOf(' hover') > -1) {
        container.className = container.className.replace(" hover", "");
      } else {
        container.className += " hover";
      }
    });
    htmlInfoWindow.setContent(frame, {
      width: "170px"
    });

    this.map.addMarker({
      position: {lat: 35.685208, lng: -121.168225},
      draggable: true,
      disableAutoPan: true
    }).then((marker: Marker) => {

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
      });
      marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    });


  }
}
