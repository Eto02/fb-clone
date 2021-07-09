import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3pomFf-kCFnPnkskQmcIeXC1cOhfa0Bc",
    authDomain: "fb-clone-f9394.firebaseapp.com",
    projectId: "fb-clone-f9394",
    storageBucket: "fb-clone-f9394.appspot.com",
    messagingSenderId: "3170206594",
    appId: "1:3170206594:web:cb6e602b6f6fed998a059b",
    measurementId: "G-QKCLXN8ZCY"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider}
  export default db;  