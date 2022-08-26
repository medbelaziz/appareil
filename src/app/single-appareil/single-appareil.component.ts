import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  appareil: { id: number; name: string; sousTitre: string; status: string; description: string; } | undefined;

  constructor(private appareilService: AppareilService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ngOnInit")

    let id = this.router.snapshot.params['id'];
    this.appareil = this.appareilService.findAppareilById(id);
  }

}
