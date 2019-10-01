import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  // IMPORTA O USUARIO QUE FOI CRIADO NO MODELS
  usuario: Usuario;

  constructor(private ls: LoginService) {
    this.usuario = new Usuario();
  }

  public cadastrar(): void {
    this.ls.criarNovoUsuario(this.usuario);
  }

  ngOnInit() {}
}
