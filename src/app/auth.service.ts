import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: any;
  private userSub = new BehaviorSubject<any>(null);
  private adminSub = new BehaviorSubject<boolean>(false);
  private loggedUserSub = new BehaviorSubject<boolean>(false);

  apiUrl = 'http://127.0.0.1:5001/kosarasweb/us-central1/api/';

  constructor(private auth:AngularFireAuth, private router:Router, private http:HttpClient) {
    this.auth.authState.subscribe(
      (user:any)=>{
        if (user){
          this.loggedUser=user?._delegate
          console.log("User", user)
          user.getIdToken().then(
            (token: any) => {
              this.loggedUser.accessToken = token
              const headers = new HttpHeaders().set('Authorization', token)
              this.http.get(this.apiUrl + "getClaims/" + user.uid, { headers }).subscribe(
                {
                  next: (claims) => {
                    console.log("Claims", claims)
                    this.loggedUser.claims = claims
                    this.userSub.next(this.loggedUser)
                    this.adminSub.next(this.loggedUser.claims.admin)
                    this.loggedUserSub.next(true)
                    console.log("User: ", this.loggedUser)
                  },
                  error: (error) => {
                    console.log(error)
                    this.loggedUser = null
                    this.userSub.next(null)
                    this.adminSub.next(false)
                    this.loggedUserSub.next(false)
                  }
                }
              )
          })
          .catch(
          (error:any)=>console.error(error)
          )
        }
        else {
          this.loggedUser=null
          this.userSub.next(null)
          this.adminSub.next(false)
          this.loggedUserSub.next(false)
        }
      }
    )
  }
  getIsAdmin(){
    return this.adminSub
  }
  getIsLoggedUser() {
    return this.loggedUserSub;
  }

  getUsers() {
    if (this.loggedUser.accessToken) {
      const headers = new HttpHeaders().set(
        'Authorization',
        this.loggedUser.accessToken
      );
      return this.http.get(this.apiUrl + 'users', { headers });
    }
    return null;
  }
  setUserClaims(uid: any, claims: any) {
    if (this.loggedUser.accessToken) {
      let body = {
        claims: claims,
        uid: uid,
      };
      const headers = new HttpHeaders().set(
        'Authorization',
        this.loggedUser.accessToken
      );
      return this.http.post(this.apiUrl + 'setCustomClaims', body, { headers });
    }
    return null;
  }

  updateUser(displayName: any, phoneNumber: any, email: any) {
    if (this.loggedUser.accessToken) {
      let body = { displayName, phoneNumber, email };
      const headers = new HttpHeaders().set(
        'Authorization',
        this.loggedUser.accessToken
      );
      return this.http.patch(this.apiUrl + 'updateUser/', body, { headers });
    }
    return null;
  }

  getLoggedUser() {
    return this.userSub;
  }

  googleAuth() {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
  signOut() {
    return this.auth.signOut();
  }

  signUpMailPassword(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.auth.currentUser
        .then((user) => {
          user?.sendEmailVerification();
        })
        .then(() => this.signOut())
        .then(() => this.router.navigate(['verifymail']))
        .catch((e) => alert(e));
    });
  }

  getCurrentUser() {
    return this.auth.authState;
  }

  signInMailPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  forgotPassword(email: any) {
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => console.log('mail elküldve!'));
  }
}
