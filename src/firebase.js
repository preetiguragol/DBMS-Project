
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  
  authDomain: "broadband-billing.firebaseapp.com",
  projectId: "broadband-billing",
  storageBucket: "broadband-billing.appspot.com",
  messagingSenderId: "784628247540",
  appId: "1:784628247540:web:4237807605058b086c67a1",
  measurementId: "G-VN139Y8M5B",
  databaseURL: "https://broadband-billing-default-rtdb.asia-southeast1.firebasedatabase.app/",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the Firebase services you need
export const auth = getAuth(app);
export const database = getDatabase(app);