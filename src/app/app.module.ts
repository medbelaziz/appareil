import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './error-view/error-view.component';
import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthGardService } from './services/auth.gard.service';
import { AppareilEditComponent } from './appareil-edit/appareil-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/appareils", pathMatch: "full" },
  { path: "appareils", canActivate: [AuthGardService], component: AppareilComponent },
  { path: "users", canActivate: [AuthGardService], component: UserViewComponent },
  { path: "appareil-edit", canActivate: [AuthGardService], component: AppareilEditComponent },
  { path: "user-edit", canActivate: [AuthGardService], component: UserEditComponent },
  { path: "appareils/:id", canActivate: [AuthGardService], component: SingleAppareilComponent },
  { path: "appareils/:id", canActivate: [AuthGardService], component: SingleAppareilComponent },
  { path: "auth", component: AuthComponent },
  { path: "page-not-found", component: ErrorViewComponent },
  { path: "**", redirectTo: "/page-note-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    AppareilEditComponent,
    UserViewComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGardService,
    AppareilService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
