import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTuz_gnr8gIZjy3r-sJdeYiFZRJxVVEE0",
  authDomain: "reparo-altoque.firebaseapp.com",
  databaseURL: "https://reparo-altoque.firebaseio.com",
  projectId: "reparo-altoque",
  storageBucket: "reparo-altoque.appspot.com",
  messagingSenderId: "414623287048",
  appId: "1:414623287048:web:3fccfbe6e94c8aaea40ebd"
}

try {
  firebase.initializeApp(firebaseConfig);
} catch {

}

function signInWithGoogle() {
  firebase.auth().signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  )
}
export { signInWithGoogle }