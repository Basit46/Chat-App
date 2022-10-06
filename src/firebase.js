import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVE_HirwnBN2GIBq75YBP0zP9JTQNBQvQ",
  authDomain: "chat-app-80aa6.firebaseapp.com",
  projectId: "chat-app-80aa6",
  storageBucket: "chat-app-80aa6.appspot.com",
  messagingSenderId: "492860120362",
  appId: "1:492860120362:web:0b8afa464e5c1058125253",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
