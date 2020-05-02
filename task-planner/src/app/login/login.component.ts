import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth/auth.service';
import {User} from '../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  auth() {
    this.authService.auth(this.user);
  }
}
