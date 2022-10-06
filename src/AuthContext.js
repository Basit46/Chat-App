import React, { useState, useContext, createContext } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setuser] = useState({});

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      setuser(result.user);
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setuser(null);
    });
  };
  return (
    <authContext.Provider value={{ user, signIn, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
  return useContext(authContext);
};