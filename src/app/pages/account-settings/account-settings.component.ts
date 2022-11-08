import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  selectElement = (ele: string) => document.querySelector(ele);
  selectAllElements = (eles: string) => document.querySelectorAll(eles);

  $themeElement = this.selectElement('#theme');

  constructor() { }

  ngOnInit(): void {
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${ theme }.css`;
    this.$themeElement?.setAttribute('href', url);
    localStorage?.setItem('theme', url);

    this.checkCurrentTheme();
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
    })
  }

}
