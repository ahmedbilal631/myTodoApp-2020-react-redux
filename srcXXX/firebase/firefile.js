import * as firebase from "firebase";

import { FirebaseConfig } from './fbConfig';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("myText");