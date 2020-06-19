//here all the basic configuration will be done..
//this file will import key also

import * as firebase from 'firebase';
import myKey from './apiKey';

const firebaseConfig = {
    apiKey: myKey,
    authDomain: "level-abode-2,
    databaseURL: "httpom",
    projectId: "level-abo",
    storageBucket: "level-abode-244405.appspot.com",
    messagingSenderId: "",
    appId: "1:8114117372eedb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const myTodoDB = firebase.database().ref('myTodos');
  export default myTodoDB;