import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAprU0Nsh9tV4vyS_GzhrNC2B10c-KTgps",
    authDomain: "bookstore-23489.firebaseapp.com",
    databaseURL: "https://bookstore-23489.firebaseio.com",
    projectId: "bookstore-23489",
    storageBucket: "bookstore-23489.appspot.com",
    messagingSenderId: "37519260554"
  });

  const fbase = Rebase.createClass(firebaseApp.database());

  export {fbase, firebaseApp};