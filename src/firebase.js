import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyALoJWiBp_vRVyNmdj04ACdbJhLboyuVzQ",
  authDomain: "disney-plus-react-clone-8224a.firebaseapp.com",
  projectId: "disney-plus-react-clone-8224a",
  storageBucket: "disney-plus-react-clone-8224a.appspot.com",
  messagingSenderId: "62790165817",
  appId: "1:62790165817:web:24247cd8f9da50aef6b4e8",
  measurementId: "G-QBSXKV6RR4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;
