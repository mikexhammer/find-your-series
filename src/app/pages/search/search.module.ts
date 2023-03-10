import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SearchPageRoutingModule, SwiperModule],
  exports: [SearchPage],
  declarations: [SearchPage],
})
export class SearchPageModule {}
