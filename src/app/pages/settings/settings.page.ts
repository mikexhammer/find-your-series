import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SerieService } from 'src/app/services/serie.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  darkMode: boolean = this.appComponent.darkmode;

  constructor(
    private serieService: SerieService,
    private alertController: AlertController,
    private appComponent: AppComponent
  ) {
    
  }

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

  switch() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
    
  }
}
