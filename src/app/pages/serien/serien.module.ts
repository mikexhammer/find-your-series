import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerienPageRoutingModule } from './serien-routing.module';

import { SerienPage } from './serien.page';
import { SearchPageModule } from '../search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerienPageRoutingModule,
    SearchPageModule,
  ],
  declarations: [SerienPage],
})
export class SerienPageModule {}
