import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

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
