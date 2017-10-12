import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  userObs: Observable<firebase.User>;
  user:any={};

  constructor(public afAuth: AngularFireAuth) {
    this.userObs = afAuth.authState;
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        res => { // Success
          this.setProfile();
        },
        msg => { // Error
          console.log(msg);
        }
      );
  }

  setProfile(){
    this.userObs.subscribe
    (user=> {
      if (user) {
        console.log(user.toJSON());
        this.user=user;
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(
      res => { // Success
        this.destroyProfile();
      },
      msg => { // Error
        console.log(msg);
      }
    );
  }

  destroyProfile(){
    this.user={};
  }

}
