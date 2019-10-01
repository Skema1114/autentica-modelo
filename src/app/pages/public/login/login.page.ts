import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email = '';
  senha = '';

  constructor(private login: LoginService, private al: AlertService) {}

  ngOnInit() {}
  public entrar(): void {
    this.login.login(this.email, this.senha);
  }
}
