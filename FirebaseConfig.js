// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRf3_BUACYCM3q_CCEIIWd8W2DSo6VmRk",
  authDomain: "schoolapp-d8bea.firebaseapp.com",
  projectId: "schoolapp-d8bea",
  storageBucket: "schoolapp-d8bea.appspot.com",
  messagingSenderId: "837301145426",
  appId: "1:837301145426:web:aaf8fb4018d7d50d9bf48b",
  measurementId: "G-2EC88H7WG0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//const analytics = getAnalytics(app);
export const FireAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
