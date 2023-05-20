/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let auth = getAuth(app);
export let AuthContext = createContext(null);
function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let [loading, setLoading] = useState(true);
  let [update, setUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
  }, []);
  let authInfo = { auth, user, loading,setUpdated ,setLoading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
