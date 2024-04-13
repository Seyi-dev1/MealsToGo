import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLkCmjgWvWcrol1nKVOY9G_FlKV-U2CDw",
  authDomain: "mealstogo-10645.firebaseapp.com",
  projectId: "mealstogo-10645",
  storageBucket: "mealstogo-10645.appspot.com",
  messagingSenderId: "651416682192",
  appId: "1:651416682192:web:a9d5906495c75a9f4828d5",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getFirestore(app);
