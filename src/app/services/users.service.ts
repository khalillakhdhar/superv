import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  // read users
  read_users() {
    return this.firestore.collection('/users').snapshotChanges()
    .pipe(
      map((actions:any) => {
        return actions.map((a:any) => {
          const data = a.payload.doc.data() as {};
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );;
  }
  // delete user
  delete_user(id:any) {
    this.firestore.doc('/users/' + id).delete();
  }

}
