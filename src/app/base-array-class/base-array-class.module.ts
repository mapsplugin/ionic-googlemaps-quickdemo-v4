import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BaseArrayClassPage } from './base-array-class.page';

const routes: Routes = [
  {
    path: '',
    component: BaseArrayClassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BaseArrayClassPage]
})
export class BaseArrayClassPageModule {}
