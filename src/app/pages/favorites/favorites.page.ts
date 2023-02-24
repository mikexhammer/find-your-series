import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
// https://ionicframework.com/docs/api/refresher
export class FavoritesPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  // Refresh
  handleRefresh(event) {
    setTimeout(() => {
      this.setFavorite();
      event.target.complete();
    }, 1000);
  }

  favorites = [] as any[];
  imageBaseUrl = environment.images;

  constructor(
    private serieService: SerieService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.setFavorite();
  }

  setFavorite() {
    this.favorites = this.serieService.getSeriesFromLocalStorage();
  }

  async presentAlert(serie) {
    const alert = await this.alertController.create({
      header: 'Sure you want to delete this series?',
      buttons: [
        {
          text: 'No, sorry.',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Yes, please!',
          role: 'confirm',
          handler: () => {
            this.serieService.deleteSerieFromLocalStorage(serie);
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
    this.setFavorite();
  }
}
