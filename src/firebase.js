import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArUCQBK8DLWZX1pWVpgWDs01eeE-U_ThQ",
  authDomain: "dropshop-68e7f.firebaseapp.com",
  projectId: "dropshop-68e7f",
  storageBucket: "dropshop-68e7f.appspot.com",
  messagingSenderId: "951963601256",
  appId: "1:951963601256:web:a478ba64b5884e739c6edd",
  measurementId: "G-RE5K8FF2X4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
