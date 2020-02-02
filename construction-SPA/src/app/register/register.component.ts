import { Router } from '@angular/router';
import { AlertifyService } from './../services/alertify.service';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthServiceService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
    // tslint:disable-next-line: no-shadowed-variable
   this.alertifyService.success('Register success!');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
   this.alertifyService.warning(error);
    }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.alertifyService.message('canceled!');
    this.router.navigate(['/home']);
  }
  }


