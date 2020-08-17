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

/**
 * Convierte el user de firebase en un objeto con los datos necesarios.
 * @param {firebase.User} user 
 */
function mapUser(user) {
  return { displayName: user.displayName, email: user.email, id: user.uid, photoURL: photoURL }
}

/**
 * Función para registrarse en Firebase Auth
 * @param {'FB_SIGN_IN'|'GOOGLE_SIGN_IN'|undefined} type Tipo de registro
 * @param {string} [email] Email usado registrarse
 * @param {string} [password] Contraseña usada para registrarse
 * @return {Promise<firebase.auth.UserCredential>}
 */
function signIn(type, email, password) {
  if (type == 'FB_SIGN_IN') {
    return firebase.auth().signInWithPopup(
      new firebase.auth.FacebookAuthProvider() //Cambiar a FacebookAuthProvider
    )
  } else if (type === 'GOOGLE_SIGN_IN') {
    return firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
      .then(user => mapUser(user.user));
  } else {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => mapUser(user.user));
  }
}

export { signIn }