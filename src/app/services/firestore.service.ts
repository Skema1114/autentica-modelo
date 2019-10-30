import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carro } from '../models/Carro';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  public gravar(carro: Carro) {
    // VERIFIOCA SE TEM ID
    if (carro.uid) {
      // SE TRATA DE UMA ATUALIZAÇÃO
      const url = 'carros/' + carro.uid;
      this.firestore.doc(url).update({ ...carro });
    } else {
      // CRIA UMA NOVA ENTRADA
      this.firestore.collection('carros').add({ ...carro });
    }
  }

  public remover(uid: string) {
    const url = 'carros/' + uid;
    this.firestore.doc(url).delete();
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
  public enviarFoto(foto: string, carroUid: string) {
    const url = `fotos/${carroUid}/${new Date().getTime()}.jpg`;

    this.storage
      .ref(url)
      .putString(foto, 'base64', { contentType: 'image/jpg' })
      .then(resp => {
        console.log('envio finalizado!', resp);
      });
  }
}
