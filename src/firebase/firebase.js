import firebase from "firebase/compat/app";
import { getFirestore, collection } from "firebase/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = getFirestore();

export const colRef = collection(db, "questions");

// getDocs(colRef)
//   .then((snapshot) => {
//     let questions = [];
//     snapshot.docs.forEach((doc) => {
//       questions.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(questions);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

export const auth = app.auth();
export default app;
