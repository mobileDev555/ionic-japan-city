// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { FCM } from '@ionic-native/fcm/ngx';
// import { Platform } from 'ionic-angular';
// import { AngularFirestore } from 'angularfire2/firestore';
// /*
//   Generated class for the FcmProvider provider.

//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// @Injectable()
// export class FcmProvider {

//   constructor(
//     public http: Http,
//     public firebaseNative: FCM,
//     public afs: AngularFirestore,
//     private platform: Platform
//     ) {
//     console.log('Hello FcmProvider Provider');
//   }

//   async getToken() {

//     let token;
  
//     if (this.platform.is('android')) {
//       token = await this.firebaseNative.getToken()
//     } 
  
//     if (this.platform.is('ios')) {
//       token = await this.firebaseNative.getToken();
//       await this.firebaseNative.grantPermission();
//     } 
    
//     return this.saveTokenToFirestore(token)
//   }

//   private saveTokenToFirestore(token) {
//     if (!token) return;
  
//     const devicesRef = this.afs.collection('devices')
  
//     const docData = { 
//       token,
//       userId: 'testUser',
//     }
  
//     return devicesRef.doc(token).set(docData)
//   }

//   listenToNotifications() {
//     return this.firebaseNative.onNotificationOpen()
//   }
// }
