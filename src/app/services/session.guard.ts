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

@Injectable({
  providedIn: 'root'
})
export class /* IMPLEMENTA O METODO DO -> */ SessionGuard implements /* ADD -> */ CanActivate {
  constructor(private login: LoginService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // SE NAO TEM NINGUEM LOGADO ELE DIRECIONA PARA TELA DE LOGIN, SENAO RETORNA VERDADEIRO E O APP PROSSEGUE
    if (!this.login.isLogado()) {
      // DIRECIONA
      //this.route.navigate(['login']);
      return true;
    } else {
      // PERMITE ACESSO
      return true;
    }
  }
}
