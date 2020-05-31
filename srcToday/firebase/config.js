//here all the basic configuration will be done..
//this file will import key also

import * as firebase from 'firebase';
import myKey from './apiKey';

const firebaseConfig = {
    apiKey: myKey,
    authDomain: "level-abode-244405.firebaseapp.com",
    databaseURL: "https://level-abode-244405.firebaseio.com",
    projectId: "level-abode-244405",
    storageBucket: "level-abode-244405.appspot.com",
    messagingSenderId: "811411739458",
    appId: "1:811411739458:web:7c4d2b79e705831a72eedb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const myTodoDB = firebase.database().ref('myTodos');
  export default myTodoDB;