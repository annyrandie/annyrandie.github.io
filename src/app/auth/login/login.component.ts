import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    if(loginForm.value.login == 'test' && loginForm.value.password == 'test') {
      this.authService.login({
        login: 'test',
        password: 'test'
      });
    }
  }

  

}
