import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.page.html',
  styleUrls: ['./administracao.page.scss']
})
export class AdministracaoPage implements OnInit {
  usuarioLogado: firebase.User;
  constructor(private login: LoginService, private menu: MenuController) {
    this.usuarioLogado = login.usuarioLogado;
    menu.enable(true);
  }

  ngOnInit() {}

  public sair(): void {
    this.login.logout();
  }
}
