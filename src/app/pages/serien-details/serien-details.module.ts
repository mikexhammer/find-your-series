import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerienDetailsPageRoutingModule } from './serien-details-routing.module';

import { SerienDetailsPage } from './serien-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerienDetailsPageRoutingModule
  ],
  declarations: [SerienDetailsPage]
})
export class SerienDetailsPageModule {}
