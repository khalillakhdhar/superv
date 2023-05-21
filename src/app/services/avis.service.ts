import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../model/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewAvis(record:any) {
    return this.firestore.collection('/Avis').add(record);
  }

  read_Avis() {

    return this.firestore.collection('/Avis').snapshotChanges();

  }

  update_Avis(recordID:any, record:any) {
    this.firestore.doc('/Avis/' + recordID).update(record);
    console.log('updated');
  }

  delete_Avis(record_id:any) {
    this.firestore.doc('/Avis' + record_id).delete();
  }
}
