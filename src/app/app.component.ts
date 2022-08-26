import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  connectionTime!: number;
  subscribe!: Subscription;


  ngOnInit(): void {

    // let observable = interval(1000);
    // this.subscribe = observable.subscribe((response) => {
    //   this.connectionTime = response;
    // });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }


}
