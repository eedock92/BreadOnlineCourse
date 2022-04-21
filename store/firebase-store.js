//npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "landofbread-d0bf2.firebaseapp.com",
  databaseURL: "https://landofbread-d0bf2-default-rtdb.firebaseio.com",
  projectId: "landofbread-d0bf2",
  storageBucket: "landofbread-d0bf2.appspot.com",
  messagingSenderId: "712101772495",
  appId: "1:712101772495:web:b52c26f52bdfeacb2c4bba",
  measurementId: "G-Q5FCDR2DZ4"
};



// Initialize Firebase
export const initialFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(initialFirebase);


// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });