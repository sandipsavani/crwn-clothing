import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB-wYAIfnhP1O9_DX0IuZFJjOeYl8dWMjE",
  authDomain: "crwn-db-a5867.firebaseapp.com",
  projectId: "crwn-db-a5867",
  storageBucket: "crwn-db-a5867.appspot.com",
  messagingSenderId: "695875330372",
  appId: "1:695875330372:web:b88e1a0265381b07e07711",
  measurementId: "G-Y0XE4YYD21",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
