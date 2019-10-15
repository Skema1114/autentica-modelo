import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class /* IMPLEMENTA O METODO DO -> */ SessionGuard implements /* ADD -> */ CanActivate {
  constructor(private login: LoginService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.login.isLogado().pipe(
      tap(estaLogado => {
        if (!estaLogado) {
          this.route.navigate(['login']);
        }
      })
    );
  }
}
