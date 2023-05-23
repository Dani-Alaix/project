import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from "firebase/app";
import { arrayUnion } from '@angular/fire/firestore'
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private publicationsCollection: AngularFirestoreCollection;

  private document: AngularFirestoreDocument;

  constructor(private fireStore: AngularFirestore) {
    this.publicationsCollection = fireStore.collection<any>('userPost');
  }

  getUsersPosts(): Observable<any> {
    return this.publicationsCollection.snapshotChanges().pipe(
      map(document => document.map(dca => {
        const data = dca.payload.doc.data() as Post;
        return { ...data };
      }))
    );
  }

  newUserMedia(data: Post) {
    this.fireStore.collection('userPost').add(data);
  }
}
