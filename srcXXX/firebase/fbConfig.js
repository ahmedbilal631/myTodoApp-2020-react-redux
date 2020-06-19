//firebase configuration file is here

// import firebaseCfg from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import * as firebase from "firebase";


// Your web app's Firebase configuration
 var FirebaseConfig = {
  apiKey: "AI7aOuszg",
  authDomain: "level-abodp.com",
  databaseURL: "https://lio.com",
  projectId: "leve05",
  storageBucket: "level-at.com",
  messagingSenderId: "41",
  appId: "1:81141173a72eedb"
  };
  // Initialize Firebase
//   firebaseCFg.initializeApp(firebaseConfig);
//   firebase.analytics();
// firebaseCfg.firestore().settings({timestampsInSnapshots: true});
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("myText");
// export default FirebaseConfig;