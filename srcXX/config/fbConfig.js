//firebase configuration file is here

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaS 361 631 njckonx0",
    authDomain: "myproje,
    databaseURL: "https://.com",
    projectId: "myproje
    storageBucket: "myprojecot.com",
    messagingSenderId: ",
    appId: "1:34295975df32f8ae3c56",
    measurementId: "G-,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;