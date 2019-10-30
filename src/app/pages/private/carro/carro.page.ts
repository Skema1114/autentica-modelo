import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Carro } from 'src/app/models/Carro';
import { Observable } from 'rxjs';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss']
})
export class CarroPage implements OnInit {
  carroCorrente: Carro;
  carros: any;

  constructor(private fs: FirestoreService, private camera: Camera) {
    this.carroCorrente = new Carro();
    this.carros = fs.listar();
  }

  ngOnInit() {}

  public editar(carroEditado) {
    this.carroCorrente = carroEditado;
  }

  public gravar(): void {
    this.fs.gravar(this.carroCorrente);
    this.carroCorrente = new Carro();
  }

  public apagar(uid: string) {
    this.fs.remover(uid);
  }

  public tirarFoto(uid: string) {
    this.camera
      .getPicture({
        quality: 10,
        destinationType: this.camera.DestinationType.DATA_URL
      })
      .then(foto => {
        this.fs.enviarFoto(foto, uid);
      });
  }
}
