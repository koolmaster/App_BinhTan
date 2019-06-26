import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { FirebaseUserModel } from './user.model';
import { Storage } from '@ionic/storage';
import { LoginService } from "../../loginService";
import { environment } from "../../../../environment/environment";


@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public fb: Facebook,
    public googlePlus: GooglePlus,
    public platform: Platform,
    public loginService : LoginService,
    public storage: Storage
  ){}

  doRegisterEmail(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(res => {

      var formcreateEmail={
        Email: res.user.email,
        SoDienThoai: res.user.phoneNumber,
        HoTen: res.user.displayName,
       // UrlImage:"http:///10.86.222.82//Portals//Uploads//CaNhan//avatar//user.png",
        FireBaseID: res.user.uid,
        Providers: "Email",
        IsFireBase: 1,
        Password: value.password
        
      }
      this.loginService.postUserCreate(formcreateEmail).then(res => {
          alert("thanh cong");
          // this.storage.set('UserInfo', formcreateEmail);
        },
        err => {
        }
      );
       console.log(res);
       resolve(res);
     }, err => reject(err))
   })
  }


  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
  }
  

  doLogout(){
   return new Promise((resolve, reject) => {
     if(firebase.auth().currentUser){
       this.afAuth.auth.signOut()
       resolve();
     }
     else {
       reject();
     }
   });
  }

  doGoogleLogin(){
     return new Promise<FirebaseUserModel>((resolve, reject) => {
      //  if (this.platform.is('cordova')) {
         this.googlePlus.login({
           'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
           'webClientId': environment.googleWebClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
           'offline': true
         }).then((response) => {
          console.log(response);
          // alert(response); 
           const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);
           firebase.auth().signInWithCredential(googleCredential)
           .then((res) => {

            var formcreateGoogle={
              Email: res.email,
              SoDienThoai: res.phoneNumber,
              HoTen: res.displayName,
              UrlImage: res.photoURL,
              FireBaseID: res.uid,
              Providers: "Google",
              IsFireBase: 1
             
            }
            this.loginService.postUserCreate(formcreateGoogle).then(
              res => {
               // alert("thanh cong");
                this.storage.set('UserInfo', formcreateGoogle);
              },
              err => {
                console.log(err);
              }
            );
            console.log(res);
            // alert(JSON.stringify(user)); 
             resolve();
           });
         },(err) => {
           reject(err);
         });
      //  }
      //  else{
      //    this.afAuth.auth
      //    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      //    .then((user) => {
      //       resolve()
      //    },(err) => {
      //     reject(err);
      //   })
      //  }
     })
   }


   doFacebookLogin(): Promise<any>{
    // return new Promise<FirebaseUserModel>((resolve, reject) => {
      // if (this.platform.is('cordova')) {
      //   debugger;
      return this.fb.login(['public_profile'])
      .then( response => {
        
        console.log(response); 
        // alert(JSON.stringify(response)); 
        if (response.status = "connected")
        {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
        
        firebase.auth().signInWithCredential(facebookCredential)
          .then( res => { 

            var formcreate={
              Email: res.email,
              SoDienThoai: res.phoneNumber,
              HoTen: res.displayName,
              UrlImage: res.photoURL,
              FireBaseID: res.uid,
              Providers: "Facebook",
              IsFireBase: 1
             
            }
            this.loginService.postUserCreate(formcreate).then(
              res => {
              //alert("thanh cong");
                this.storage.set('UserInfo', formcreate);
              },
              err => {
              }
            );



            console.log(res); 
            // alert(JSON.stringify(success)); 
          });

        }
  
      }).catch((error) => { console.log(error) });
  }


        // ["public_profile"] is the array of permissions, you can add more if you need
      //   this.fb.login(["public_profile"])
      //   .then((response) => {
      //     debugger;
      //     console.log(response);
      //     const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      //     firebase.auth().signInWithCredential(facebookCredential)
      //       .then(user => resolve());
      //   }, err => reject(err)
      //   );
      // }
      // else {
        // this.afAuth.auth
        // .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        // .then(result => {
        //   debugger;
        //   //Default facebook img is too small and we need a bigger image
        //   var bigImgUrl = result.additionalUserInfo.profile.picture.data.url;
        //   // update profile to save the big fb profile img.
        //   firebase.auth().currentUser.updateProfile({
        //     displayName: result.user.displayName,
        //     photoURL: bigImgUrl
        //   }).then(res => resolve()
        //   ,(err) => {
        //     reject(err);
        //   });
        // },(err) => {
        //   reject(err);
        // })
      // }
  //   })
  // }

  // doTwitterLogin(){
  //   return new Promise<FirebaseUserModel>((resolve, reject) => {
  //     // if we are in a mobile device we use the twitter native plugin

  //     if (this.platform.is('cordova')) {
  //       this.tw.login()
  //         .then((response) => {
  //           const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);
  //           firebase.auth().signInWithCredential(twitterCredential)
  //           .then(
  //             user => resolve(),
  //             error => reject(error)
  //           );
  //         },
  //         err => {
  //           console.log(err);
  //           reject(err);
  //         }
  //       );
  //     }
  //     else {
  //       this.afAuth.auth
  //       .signInWithPopup(new firebase.auth.TwitterAuthProvider())
  //       .then(result => {
  //         //Default twitter img is just 48x48px and we need a bigger image https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
  //         var bigImgUrl = (result.user.photoURL).replace('_normal', '_400x400');

  //         // update profile to save the big tw profile img.
  //         firebase.auth().currentUser.updateProfile({
  //           displayName: result.user.displayName,
  //           photoURL: bigImgUrl
  //         }).then(res => resolve(),(err) => {
  //           reject(err);
  //         });
  //       },(err) => {
  //         reject(err);
  //       })
  //     }
  //   })
  // }
}
