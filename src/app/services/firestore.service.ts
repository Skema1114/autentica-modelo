import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carro } from '../models/Carro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  public gravar(carro: Carro) {
    this.firestore.collection('carros').add({ ...carro });
  }

  public listar() {
    return this.firestore
      .collection('carros')
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(carro => {
            const uid = carro.payload.doc.id;
            const dados = carro.payload.doc.data();
            return { uid, ...dados };
          })
        )
      );
  }
}
