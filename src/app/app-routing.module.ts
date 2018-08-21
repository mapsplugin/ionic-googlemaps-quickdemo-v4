import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerPageModule' },
  { path: 'marker-cluster', loadChildren: './marker-cluster/marker-cluster.module#MarkerClusterPageModule' },
  { path: 'polyline', loadChildren: './polyline/polyline.module#PolylinePageModule' },
  { path: 'polygon', loadChildren: './polygon/polygon.module#PolygonPageModule' },
  { path: 'ground-overlay', loadChildren: './ground-overlay/ground-overlay.module#GroundOverlayPageModule' },
  { path: 'tile-overlay', loadChildren: './tile-overlay/tile-overlay.module#TileOverlayPageModule' },
  { path: 'circle', loadChildren: './circle/circle.module#CirclePageModule' },
  { path: 'geocoding', loadChildren: './geocoding/geocoding.module#GeocodingPageModule' },
  { path: 'html-info-window', loadChildren: './html-info-window/html-info-window.module#HtmlInfoWindowPageModule' },
  { path: 'kml-overlay', loadChildren: './kml-overlay/kml-overlay.module#KmlOverlayPageModule' },
  { path: 'street-view', loadChildren: './street-view/street-view.module#StreetViewPageModule' },
  { path: 'base-array-class', loadChildren: './base-array-class/base-array-class.module#BaseArrayClassPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
