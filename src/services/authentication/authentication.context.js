import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsBooting(false);
      } else {
        setIsBooting(false);
      }
    });
  });

  const onLogin = async (email, password) => {
    console.log("running");
    setIsLoading(true);
    try {
      const user = await loginRequest(email, password);
      setUser(user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.toString());
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    setIsLoading(true);
    setError([]);
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Error: Passwords do not match!");
      return;
    }
    try {
      console.log("running");
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userAuth.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.toString());
    }
  };

  const onLogOut = () => {
    setUser(null);
    auth.signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
        isBooting,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
