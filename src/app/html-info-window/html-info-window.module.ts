import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HtmlInfoWindowPage } from './html-info-window.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlInfoWindowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HtmlInfoWindowPage]
})
export class HtmlInfoWindowPageModule {}
