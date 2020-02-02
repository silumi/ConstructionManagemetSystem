import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = {};
  constructor(public authService: AuthServiceService, private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
    this.alertifyService.message('logged in successfull !');
    console.log('succ');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertifyService.error(error);
    }, () => {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate(['/dashboard']);
    }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  loggedOut() {
    localStorage.removeItem('token');
    this.alertifyService.message('logged out !');
    this.router.navigate(['/home']);
  }
}
