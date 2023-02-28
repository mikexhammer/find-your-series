import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  darkmode: boolean;
  constructor() {
    this.checkDarkTheme();
  }
  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkmode = false;
    if ( prefersDark.matches ) {
      document.body.classList.toggle( 'dark' );
      this.darkmode = true;
    }
  }
}
