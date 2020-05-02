import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate, CanActivateChild {
  private authService: AuthService;
  private router: Router;

  constructor(authService: AuthService, router: Router) {
    this.router = router;
    this.authService = authService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuth()) {

      this.router.navigate(['/taskList']);
    }
    console.log('что ');
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuth()) {

      this.router.navigate(['/taskList']);
    }
    console.log('что canActivateChild');
    return true;  }
}
