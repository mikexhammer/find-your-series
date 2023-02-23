import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { SerienPage } from '../serien/serien.page';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchPage implements OnInit {
  constructor(public serieService: SerieService, public seriePage: SerienPage) {}

  ngOnInit() {}

  searchSerieByName(event) {
    const searchValue = event.target.value;
    //invoke method from serien.page.ts loadSerie() and pass searchValue
    this.seriePage.serien = [];
    this.seriePage.currentPage = 1;
    this.seriePage.loadSeries(event,searchValue);
  }
}
