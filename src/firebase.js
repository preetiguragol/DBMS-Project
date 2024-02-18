// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeYFarXHju46p_jmBEURL2kq7GxIPzbFQ",
  authDomain: "broadband-billing.firebaseapp.com",
  projectId: "broadband-billing",
  storageBucket: "broadband-billing.appspot.com",
  messagingSenderId: "784628247540",
  appId: "1:784628247540:web:4237807605058b086c67a1",
  measurementId: "G-VN139Y8M5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);