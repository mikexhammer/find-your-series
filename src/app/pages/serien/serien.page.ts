import { Component, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  LoadingController,
} from '@ionic/angular';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serien',
  templateUrl: './serien.page.html',
  styleUrls: ['./serien.page.scss'],
})
export class SerienPage implements OnInit {
  serien = [] as any[];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(
    private serieService: SerieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadSeries();
  }

  //Asnyc bcs code will await until all of this is finished :)
  async loadSeries(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });

    await loading.present();

    this.serieService.getTopRatedSeries(this.currentPage).subscribe((res) => {
      loading.dismiss(); //Shows first loading sign until all is done
      this.serien.push(...res.results);
      console.log(res);
      console.log(this.serien);

      event?.target.complete();

      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadSeries(event);
  }
}
