// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMW75XPB6n0m2vTWZGQjXqmMYC0N1DJqo",
  authDomain: "dragon-news-b9eb2.firebaseapp.com",
  projectId: "dragon-news-b9eb2",
  storageBucket: "dragon-news-b9eb2.appspot.com",
  messagingSenderId: "139233886237",
  appId: "1:139233886237:web:d3da9f61c8c56602c3c6f4"
};
/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);