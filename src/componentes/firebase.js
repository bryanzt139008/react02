// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJslhq0xQVknljSxgavEOfxfswWxDQktg",
  authDomain: "appreact-24194.firebaseapp.com",
  projectId: "appreact-24194",
  storageBucket: "appreact-24194.appspot.com",
  messagingSenderId: "543192115726",
  appId: "1:543192115726:web:d4ec90292d7ddcd1ba2a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage (app);

