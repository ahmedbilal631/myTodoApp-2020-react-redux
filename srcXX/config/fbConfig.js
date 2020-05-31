//firebase configuration file is here

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCZYM6pGFWWyLKkQzltjf8P_rRWo71gWx0",
    authDomain: "myprojectmanager7891.firebaseapp.com",
    databaseURL: "https://myprojectmanager7891.firebaseio.com",
    projectId: "myprojectmanager7891",
    storageBucket: "myprojectmanager7891.appspot.com",
    messagingSenderId: "34295975011",
    appId: "1:34295975011:web:ccf28391fe9832f8ae3c56",
    measurementId: "G-3L4KS6N85E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;