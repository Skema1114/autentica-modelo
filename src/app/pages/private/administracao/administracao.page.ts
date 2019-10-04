import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.page.html',
  styleUrls: ['./administracao.page.scss']
})
export class AdministracaoPage implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit() {}

  public sair(): void {
    this.login.logout();
  }
}
