import firebase from "firebase/compat/app";
import { getFirestore, collection } from "firebase/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOnsv7W-sX-fSmH8y-P99hVlKPZVo4Rhc",
  authDomain: "ultra-funny-party-game.firebaseapp.com",
  projectId: "ultra-funny-party-game",
  storageBucket: "ultra-funny-party-game.appspot.com",
  messagingSenderId: "294300916851",
  appId: "1:294300916851:web:fcbaec204a4a797f77de06",
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
