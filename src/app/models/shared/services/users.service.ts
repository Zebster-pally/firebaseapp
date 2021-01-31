import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/user';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  get(): Observable<IUser[]> {
    return this.firestore.collection<IUser>('/users').valueChanges();
  }

  getById(uid: string): Observable<IUser> {
    return this.firestore.collection<IUser>('/users').doc(uid).valueChanges();
  }

  delete(uid: string): Promise<void> {
    return this.firestore.collection('/users').doc(uid).delete();
  }

  update(user: IUser): Promise<void> {
    return this.firestore.collection('/users').doc(user.uid).update(user);
  }
}
