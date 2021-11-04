import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthorized = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  localesList = [
    {code: 'en-US', label: 'English', imagePath: '../assets/images/usflag.svg'},
    {code: 'ua', label: 'Українська', imagePath: '../assets/images/uaflag.svg'}
  ]

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuthorized = authStatus;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
