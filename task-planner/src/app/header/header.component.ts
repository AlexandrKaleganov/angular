import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   userName = 'Пользователь Авторизован';
   authService: AuthService;
  private router: Router;

  constructor(authService:AuthService,   router: Router
) {
this.router  = router;
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
