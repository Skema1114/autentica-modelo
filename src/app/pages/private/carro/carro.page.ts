import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Carro } from 'src/app/models/Carro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss']
})
export class CarroPage implements OnInit {
  carroCorrente: Carro;
  carros: any;

  constructor(private fs: FirestoreService) {
    this.carroCorrente = new Carro();
    this.carros = fs.listar();
  }

  ngOnInit() {}

  public gravar(): void {
    this.fs.gravar(this.carroCorrente);
  }
}
