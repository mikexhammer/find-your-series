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
  listView = false;
  gridView = true;
  disableInfiniteScroll = false;
  imageBaseUrl = environment.images;
  searchName;
  searchGenre;
  searchYear;

  constructor(
    private serieService: SerieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadSeries();
  }

  //Asnyc bcs code will await until all of this is finished :)
  async loadSeries(event?: InfiniteScrollCustomEvent) {
    console.log('loadSeries() called');
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });

    await loading.present();

    if (this.searchName) {
      this.serieService
        .getSerieByName(this.searchName, this.currentPage)
        .subscribe((res) => {
          loading.dismiss(); //Shows first loading sign until all is done
          this.serien.push(...res.results);
          console.log(res);
          console.log(this.serien);

          event?.target.complete();

          if(res.total_pages === this.currentPage){
            this.disableInfiniteScroll = true;
          }
        });
    } else {
      this.serieService.getTopRatedSeries(this.currentPage).subscribe((res) => {
        loading.dismiss(); //Shows first loading sign until all is done
        this.serien.push(...res.results);
        console.log(res);
        console.log(this.serien);

        event?.target.complete();

        if(res.total_pages === this.currentPage){
          this.disableInfiniteScroll = true;
        }
      });
    }
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadSeries(event);
    console.log('SearchName = ' + this.searchName);
  }

  scrollToTop() {
    document.querySelector('ion-content')?.scrollToTop(500);
  }

  toggleGrid() {
    this.gridView = true;
    this.listView = false;
    document.getElementById('grid').style.color = 'black';
    document.getElementById('view').style.color = 'gray';
  }

  toggleView() {
    this.gridView = false;
    this.listView = true;
    document.getElementById('grid').style.color = 'gray';
    document.getElementById('view').style.color = 'black';
  }


}
