import React, { useContext, createContext } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const authContext = createContext();

const AuthContext = ({ children }) => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then((result) => {
      console.log(result.user);
    });
  };

  const [user] = useAuthState(auth);
  console.log(user);

  const logout = () => {
    signOut(auth).then(() => {});
  };
  return (
    <authContext.Provider value={{ signIn, logout, user }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
  return useContext(authContext);
};
