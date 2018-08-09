import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KmlOverlayPage } from './kml-overlay.page';

const routes: Routes = [
  {
    path: '',
    component: KmlOverlayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KmlOverlayPage]
})
export class KmlOverlayPageModule {}
