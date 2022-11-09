import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  selectElement = (ele: string) => document.querySelector(ele);
  selectAllElements = (eles: string) => document.querySelectorAll(eles);
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

    this.checkCurrentTheme();
  }

  changeTheme2(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.$themeElement?.setAttribute('href', url);
    localStorage?.setItem('theme', url);
  }

  checkCurrentTheme() {
    const links = this.selectAllElements('.selector');

    links.forEach((item) => {
      item.classList.remove('working');
      const btnTheme = item.getAttribute('data-theme');
      const btnThemeInUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.$themeElement?.getAttribute('href');

      const isEqual = btnThemeInUrl === currentTheme;
      if (isEqual) {
        item.classList.add('working');
      }
    });
  }
}
