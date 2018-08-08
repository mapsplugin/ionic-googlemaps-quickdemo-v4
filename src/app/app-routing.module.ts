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
  { path: 'tile-overlay', loadChildren: './tile-overlay/tile-overlay.module#TileOverlayPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
