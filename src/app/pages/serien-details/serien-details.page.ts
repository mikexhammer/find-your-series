import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-serien-details',
  templateUrl: './serien-details.page.html',
  styleUrls: ['./serien-details.page.scss'],
})
export class SerienDetailsPage implements OnInit {
  serie: any;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    public serieService: SerieService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.serieService.getSerieDetails(id as string).subscribe((res) => {
      console.log(res);
      this.serie = res;
    });
  }

  saveSeries(serie) {
    if (this.serieService.serieAlreadyInLocalStorage(serie)) {
      console.log('Serie already in local storage');
      this.presentToast('Serie already saved');
    } else {
      this.serieService.saveSerieToLocalStorage(serie);
      this.presentToast('Serie saved to your favorites');
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      translucent: true,
    });

    await toast.present();
  }
}
