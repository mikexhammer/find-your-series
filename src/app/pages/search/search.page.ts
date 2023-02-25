import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { SerienPage } from '../serien/serien.page';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Observable } from 'rxjs';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchPage implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    navigation: true,
    pagination: true,
  };

  constructor(
    public serieService: SerieService,
    public seriePage: SerienPage
  ) {}

  swiperSlideChanged(e) {
    console.log('slide changed', e);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  ngOnInit() {}

  searchSerieByName(event): void {
    this.seriePage.scrollToTop();
    const searchValue = event.target.value;
    this.seriePage.disableInfiniteScroll = false;
    this.seriePage.serien = [];
    this.seriePage.currentPage = 1;
    this.seriePage.searchName = searchValue;
    this.seriePage.loadSeries();
  }

  searchSerieByGenre(event) {
    const searchValue = event.target.value;
    this.seriePage.disableInfiniteScroll = false;
    this.seriePage.serien = [];
    this.seriePage.currentPage = 1;
    this.seriePage.searchGenre = searchValue;
    this.seriePage.loadSeries();
  }

  searchSerieByYear(event) {
    const searchValue = event.target.value;
    this.seriePage.disableInfiniteScroll = false;
    this.seriePage.serien = [];
    this.seriePage.currentPage = 1;
    this.seriePage.searchYear = searchValue;
    this.seriePage.loadSeries();
  }
}
