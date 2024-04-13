import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const loginRequest = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const registerRequest = async (email, password) => {
  return createUserWithEmailAndPassword(email, password, auth);
};
