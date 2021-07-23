import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDnZ2V5aDa666abgkfN5jFOnobMxfRYsLA",
    authDomain: "message-board-li.firebaseapp.com",
    projectId: "message-board-li",
    storageBucket: "message-board-li.appspot.com",
    messagingSenderId: "627168411772",
    appId: "1:627168411772:web:503a5601e770ef9f13c9f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };