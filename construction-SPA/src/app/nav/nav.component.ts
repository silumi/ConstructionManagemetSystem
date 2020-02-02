import { Routes, Router } from '@angular/router';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  registerMode = false;
  model: any = {};
  constructor(public authService: AuthServiceService, private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

loggedIn() {
  return this.authService.loggedIn();
}
loggedOut() {
  localStorage.removeItem('token');
  this.alertifyService.message('logged out !');
  this.router.navigate(['/home']);
}
registerToggle(){
  this.registerMode = true;
}
cancelRegisterMode(registerMode: boolean){
  this.registerMode = registerMode;
}
}
