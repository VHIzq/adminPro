import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  
  $themeElement = document.querySelector('#theme');
  constructor() {}

  ngOnInit(): void {
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
