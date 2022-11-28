import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  
    this.getUsers().then(users => {
      console.log(users);
    })
    //setInterval(this.timerHit, 3000);
  }
  /* public timerHit() {
    
    const promesaResuelta = () => console.log('EL golpe esta dado');
    const promesaRechazada = () => console.log('Era una trampa');

    const randomHit = Math.floor(Math.random() * (5 - 1) + 1);
    const numberIsBetween = randomHit < 3 ? true : false;

    const promise = new Promise((resolve, reject) => {
      if (numberIsBetween) {
        resolve(promesaResuelta());
      } else {
        reject(promesaRechazada());
      }
    });
    promise
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.log('error de la promesa', error);
      });
    console.log('End of you promise ');
  } */

  getUsers() {
    return new Promise<void>((resolve) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })
  }
}
