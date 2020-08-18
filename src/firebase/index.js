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
const mapUser = (user) => ({ displayName: user.displayName, email: user.email, id: user.uid, photoURL: user.photoURL })

/**
 * Función para registrarse en Firebase Auth
 * @param {'FB_SIGN_IN'|'GOOGLE_SIGN_IN'|undefined} type Tipo de registro
 * @param {string} [email] Email usado registrarse
 * @param {string} [password] Contraseña usada para registrarse
 * @param {string} [displayName] Nombre del usuario usado para registrarse
 * @return {Promise<{displayName: string, email: string, id: string, photoURL?: string}>}
 */
const createAccount = (type, email, password, displayName) => {
  if (!type)
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => user.updateProfile({ displayName }).then(() => mapUser(user)))
  else //Si es con fb o google
    return signIn(type)
}

/**
 * Función para registrarse en Firebase Auth
 * @param {'FB_SIGN_IN'|'GOOGLE_SIGN_IN'|undefined} type Tipo de registro
 * @param {string} [email] Email usado registrarse
 * @param {string} [password] Contraseña usada para registrarse
 * @return {Promise<{displayName: string, email: string, id: string, photoURL?: string}>}
 */
const signIn = (type, email, password) => {
  if (type == 'FB_SIGN_IN') {
    return firebase.auth().signInWithPopup(
      new firebase.auth.FacebookAuthProvider() //Cambiar a FacebookAuthProvider
    )
      .then(({ user }) => mapUser(user))
  } else if (type === 'GOOGLE_SIGN_IN') {
    return firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
      .then(({ user }) => mapUser(user))
  } else
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => mapUser(user));
}

/**
 * Observa los cambios de la sesión de Firebase Auth
 */
const onAuthStateChanged = (callback) =>
  firebase.auth().onAuthStateChanged(
    (user) => callback(user ? mapUser(user) : null)
  );


/**
 * Cerrar sesión
 */
const signOut = () => firebase.auth().signOut();

export { createAccount, signOut, signIn, onAuthStateChanged }