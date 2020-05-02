import {Injectable} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    new User('admin', 'admin'), new User('user', 'user'),
    new User('operator', 'operator')
  ];
  router:Router;
  constructor(router:Router) {
    this.router = router;
  }

  auth(user: User) {
    this.users.forEach((e) => {
      if (e.login === user.login && e.password === user.password) {
        localStorage.setItem('isAuth', 'true');
        this.router.navigate(['/taskList']);
      }
    })
  }

  isAuth(): boolean {
    return localStorage.getItem('isAuth') !== null &&
      localStorage.getItem('isAuth') === 'true';
  }
  logout() {
    localStorage.setItem('isAuth', 'false');
  }
}
