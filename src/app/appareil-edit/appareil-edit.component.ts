import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-edit',
  templateUrl: './appareil-edit.component.html',
  styleUrls: ['./appareil-edit.component.scss']
})
export class AppareilEditComponent implements OnInit {
  defaultStatut = "eteint";

  constructor(private appareilService: AppareilService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let appareil = { id: 0, name: "", sousTitre: "", status: "", description: "" };
    appareil.name = form.value['name'];
    appareil.sousTitre = form.value['sousTitre'];
    appareil.status = form.value['status'];
    this.appareilService.addAppareil(appareil);

    this.route.navigate(['/appareils']);
  }
}
