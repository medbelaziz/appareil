import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  status!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.status = this.authService.status;
  }

  onConnect() {
    this.authService.connecter().then(() => {
      this.status = this.authService.status;
      this.router.navigate(['appareils']);
    });
  }

  onDisconnect() {
    this.authService.disconnecter();
    this.status = this.authService.status;
  }
}
