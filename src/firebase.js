import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ipTcAfBGDK63d-qS5ljpPbW68G06nj0",
  authDomain: "ffc-kiosk.firebaseapp.com",
  databaseURL: "https://ffc-kiosk-default-rtdb.firebaseio.com",
  projectId: "ffc-kiosk",
  storageBucket: "ffc-kiosk.appspot.com",
  messagingSenderId: "61045760657",
  appId: "1:61045760657:web:27634ab03b5ff16d0a5530",
  measurementId: "G-2EZE85P86K"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};