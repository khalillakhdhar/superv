import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  // read products
  read_products() {
    return this.firestore.collection('/products').snapshotChanges()
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
  // delete product
  delete_product(id:any) {
    this.firestore.doc('/products/' + id).delete();
  }

}
