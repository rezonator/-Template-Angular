import {Component} from "@angular/core";
import {Observable, Observer} from "rxjs";

@Component({
    selector : "test",
    template : `<div class="row well" *ngFor="let t of testStream | async">{{ t }}</div>`
})
export class TestComponent {
    testStream : Observable<Array<string>> = Observable.create((observer: Observer<string>) => {
        var n = 0;
        setTimeout(() => {
            observer.next((++n).toString());
        }, 1000);

        setTimeout(() => {
            observer.next((++n).toString());
        }, 2000);
    });    

    /* you can also subscribe speicifcally to this observable : 
    
      let subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );

      and then use value as a regular array to bind to ngFor

      OR 
      
          this.heroes = this._heroService.getHeroes()
                      .subscribe(heroes => this.heroes = heroes);

      */
}