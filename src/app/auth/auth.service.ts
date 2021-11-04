import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user;
  
  constructor(private router: Router) {

  }
  login(authData: AuthData) {
    this.user = {
      userId: Math.round(Math.random() * 1000).toString()
    }
    this.authChange.next(true);
    this.router.navigate(['/resume']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.user != null;
  }

}