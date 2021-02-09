import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDcne-9IIhSsNLB88sUt8UuqfZ3DrYTMQo",
  authDomain: "india-chat-app-706b0.firebaseapp.com",
  projectId: "india-chat-app-706b0",
  storageBucket: "india-chat-app-706b0.appspot.com",
  messagingSenderId: "614956211301",
  appId: "1:614956211301:web:c169d9e960eb3ce31d3a8c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export {auth,provider } ;
export default db;