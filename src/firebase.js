import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpNakr14bsDlZHB1tKlkyNGMMIJjxrCp4",
  authDomain: "instagram-clone-1222b.firebaseapp.com",
  databaseURL: "https://instagram-clone-1222b-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-1222b",
  storageBucket: "instagram-clone-1222b.appspot.com",
  messagingSenderId: "281434244898",
  appId: "1:281434244898:web:e41cdcb62a88e2f48a877b",
  measurementId: "G-ZPMVRD579N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
