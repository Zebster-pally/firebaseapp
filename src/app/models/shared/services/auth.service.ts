import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IUser } from '../interfaces/user';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) {
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        await this.setUserData(user);
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        await this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }

  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        await this.createUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async setUserData(user) {
    const userData = await this.afs.doc<IUser>(`users/${user.uid}`)
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    localStorage.setItem('roles', JSON.stringify(userData.roles));
  }

  async createUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: IUser = {
      email: user.email,
      uid: user.uid,
      roles: {
        reader: true,
        admin: false
      }
    }

    localStorage.setItem('roles', JSON.stringify(userData.roles));

    return await userRef.set(userData, {
      merge: true
    })
  }

  isAdmin() {
    const roles = JSON.parse(localStorage.getItem('roles'));
    return roles.admin == true;
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
    })
  }

}
