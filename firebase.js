// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXg0ZQ52b6xcV1if8KG_otIBE9Qb-_ejk",
  authDomain: "flash-card-c5bfd.firebaseapp.com",
  projectId: "flash-card-c5bfd",
  storageBucket: "flash-card-c5bfd.appspot.com",
  messagingSenderId: "1060551407834",
  appId: "1:1060551407834:web:420f063da34de525e58de3",
  measurementId: "G-5JQVPYTTJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db} 