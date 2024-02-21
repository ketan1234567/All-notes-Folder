import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of,timer,mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustompreloadingService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if (route.data && route.data['preload']) {
      if(route.data['delay']){
        return timer(5000).pipe(mergeMap(()=>load()));
      }

      return load();
    }
    return of(null);

  }

}
