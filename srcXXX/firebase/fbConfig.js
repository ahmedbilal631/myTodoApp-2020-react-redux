//firebase configuration file is here

// import firebaseCfg from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import * as firebase from "firebase";


// Your web app's Firebase configuration
 var FirebaseConfig = {
  apiKey: "AIzaSyAGTQixPpy0eO-y7aOCcAFWshfbdskbfjs2FAKyXCuszg",
  authDomain: "level-abode-244405.firebaseapp.com",
  databaseURL: "https://level-abode-244405.firebaseio.com",
  projectId: "level-abode-244405",
  storageBucket: "level-abode-244405.appspot.com",
  messagingSenderId: "811411739458",
  appId: "1:811411739458:web:7c4d2basiufhksdh79e705831a72eedb"
  };
  // Initialize Firebase
//   firebaseCFg.initializeApp(firebaseConfig);
//   firebase.analytics();
// firebaseCfg.firestore().settings({timestampsInSnapshots: true});
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("myText");
// export default FirebaseConfig;