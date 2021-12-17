import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rememberMe: string = 'session';
  constructor(private fireAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.fireAuth.setPersistence(this.rememberMe).then(() => {
      return this.fireAuth.signInWithEmailAndPassword(email, password);
    });
  }
  getAuth() {
    return this.fireAuth.authState.pipe(map((auth) => auth));
  }

  logout() {
    return this.fireAuth.signOut();
  }
  setRememberMe() {
    this.rememberMe = firebase.auth.Auth.Persistence.LOCAL;
  }

  signup(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
  signinWithGoogle() {
    return this.fireAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
