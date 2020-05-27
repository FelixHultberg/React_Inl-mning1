
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// npm i -g firebase-tools paketet 
// npm i firebase
//....AIzaSyApkZahEANZ9nbjQa3Lu_MY6etuB_BAJmQ
const firebaseConfig = {
    apiKey: "AIzaSyBQpFdJ3CGxq1uM1NAziFkZ_wDjaye61PY",
    authDomain: "klassprojekt-64468.firebaseapp.com",
    databaseURL: "https://klassprojekt-64468.firebaseio.com",
    projectId: "klassprojekt-64468",
    storageBucket: "klassprojekt-64468.appspot.com",
    messagingSenderId: "132404147880",
    appId: "1:132404147880:web:cf0322b1933f1b15c6f49d",
    measurementId: "G-18WR44KEMC"
};

//initialize 
firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

export const auth = firebase.auth();
export default firebase;