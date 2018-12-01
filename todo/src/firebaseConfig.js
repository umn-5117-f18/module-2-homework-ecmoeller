import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAdynoreLJg8vdGFklI5EVuo5eMr7R699Y",
    authDomain: "todo-aa404.firebaseapp.com",
    databaseURL: "https://todo-aa404.firebaseio.com",
    projectId: "todo-aa404",
    storageBucket: "todo-aa404.appspot.com",
    messagingSenderId: "148072616028"
  };

const provider = new firebase.auth.GoogleAuthProvider()
firebase.initializeApp(config);
export {provider};