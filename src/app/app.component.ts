import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Marker',
      url: '/marker'
    },
    {
      title: 'MarkerCluster',
      url: '/marker-cluster'
    },
    {
      title: 'Polyline',
      url: '/polyline'
    },
    {
      title: 'Polygon',
      url: '/polygon'
    },
    {
      title: 'Polygon',
      url: '/polygon'
    },
    {
      title: 'GroundOverlay',
      url: '/ground-overlay'
    },
    {
      title: 'GroundOverlay',
      url: '/ground-overlay'
    },
    {
      title: 'TileOverlay',
      url: '/tile-overlay'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
