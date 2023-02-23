import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
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
  constructor(public serieService: SerieService) {}

  ngOnInit() {}

  searchSerieByName(event) {
    const searchValue = event.target.value.toLowerCase();
    this.serieService.getSerieByName(searchValue);
  }
}
