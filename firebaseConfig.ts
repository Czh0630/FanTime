import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhKx9bAdfk5xgj8FfyhlEkxyIBcguhuiE",
  authDomain: "fantime-58b1a.firebaseapp.com",
  projectId: "fantime-58b1a",
  storageBucket: "fantime-58b1a.appspot.com",
  messagingSenderId: "236158024623",
  appId: "1:236158024623:web:3e1aed510f0eb1a2528d5a",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

signInAnonymously(auth).catch(console.error);