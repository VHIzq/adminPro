import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private $themeElement = document.querySelector('#theme');

  constructor() {
    this.changeTheme();
  }

  changeTheme() {
    const themeByDefault = './assets/css/colors/purple-dark.css';
    const url = localStorage.getItem('theme');
    const hasTheme = !!url;

    if (hasTheme) {
      this.$themeElement?.setAttribute('href', url);
    } else {
      this.$themeElement?.setAttribute('href', themeByDefault);
    }
  }
}
