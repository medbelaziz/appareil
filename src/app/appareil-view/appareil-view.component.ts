import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareilSubscription !: Subscription;
  appareils!: any[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    console.log("-------- ngOnInit ----------");
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(appareils => this.appareils = appareils);
    this.appareilService.emitAppareilSubject();
    console.log("---- fin ngOnInit ---------- ");
  }

  ngOnDestroy() {
    console.log("---- ngOnDestroy ----------");
    this.appareilSubscription.unsubscribe();
    console.log("---- fin ngOnDestroy ----------");
  }

  onAllumer(index: number) {
    this.appareilService.allumerAppareil(index);
  }

  onEtteindre(index: number) {
    this.appareilService.etteindreAppareil(index);
  }

  onAllAllumer() {
    this.appareilService.allumerAppareils();
  }

  onAllEtteindre() {
    this.appareilService.etteindreAppareils();
  }
}