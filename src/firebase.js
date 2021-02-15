import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRy4AY5HKJXeGGjxVY_0oGdY67_6jqtQU",
    authDomain: "twitter-clone-f2f5d.firebaseapp.com",
    projectId: "twitter-clone-f2f5d",
    storageBucket: "twitter-clone-f2f5d.appspot.com",
    messagingSenderId: "1008258133868",
    appId: "1:1008258133868:web:e11ba2532159c04951cd49",
    measurementId: "G-BVPB6H7PVT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;