import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCm92jKW5VUGHJTguJfocXYgCdVrV7X5-I",
  authDomain: "kailashmsg.firebaseapp.com",
  databaseURL: "https://kailashmsg.firebaseio.com",
  projectId: "kailashmsg",
  storageBucket: "kailashmsg.appspot.com",
  messagingSenderId: "490851557844",
  appId: "1:490851557844:web:76a8f21f19381d8286f641",
  measurementId: "G-QTDBK8MLR6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;