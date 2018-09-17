import { Injectable } from '@angular/core';
import { app, auth, User,  } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { FirebaseAuth } from '@angular/fire';

@Injectable()
export class AuthService {

  private user: User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((x) => {
      this.user = x;
    });
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  public doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then((res) => {
          resolve(res);
        }, (err) => {
          console.log('Login Failed. ', err);
          reject(err);
        });
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
