import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serien',
  templateUrl: './serien.page.html',
  styleUrls: ['./serien.page.scss'],
})
export class SerienPage implements OnInit {
  serien = [];
  currentPage = 1;

  constructor(
    private serieService: SerieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadSeries();
  }

  //Asnyc bcs code will await until all of this is finished :)
  async loadSeries() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });

    await loading.present();

    this.serieService.getTopRatedSeries(this.currentPage).subscribe((res) => {
      loading.dismiss(); //Shows first loading sign until all is done
      this.serien = [...this.serien, ...res.results];
      console.log(res);
    });
  }
}
