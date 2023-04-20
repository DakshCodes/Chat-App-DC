import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2UKDslIQI0ireUgxIAHjDA5IFBTwQG68",
  authDomain: "chat-app-7d6ec.firebaseapp.com",
  projectId: "chat-app-7d6ec",
  storageBucket: "chat-app-7d6ec.appspot.com",
  messagingSenderId: "250601708395",
  appId: "1:250601708395:web:6faae8a9b39fc1a42c8a2e"
};


// App Initialize 

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {  auth, provider ,db }

