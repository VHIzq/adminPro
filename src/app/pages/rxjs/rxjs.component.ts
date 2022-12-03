import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() { 
    let i = -1;

    const obs$ = new Observable(observer => {

      const interval = setInterval(() => {
        i++; 
        observer.next(i)
        if (i === 5) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor 2')
        }
      }, 1000)
    });

    obs$.pipe(
      retry(1)
    ).subscribe(
      value => console.log('Subs', value), 
      (err) => console.warn('Error', err),
      () => console.info('Obs terminado')
    )
  }

}
