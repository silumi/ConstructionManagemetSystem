import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    return false;

  }

}
