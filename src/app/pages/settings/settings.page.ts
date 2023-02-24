import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(
    private serieService: SerieService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'You really want to delete all your favourites?',
      buttons: [
        {
          text: 'No!',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Yes, please!',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.serieService.clearLocalStorage();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  checkIfLocalStorageIsEmpty() {
    if (this.serieService.getSeriesFromLocalStorage().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  toggleTheme(event) {
    console.log(event.detail.checked);
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
