import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useContext } from "react";
import { loginstate_context } from "../context/GBContext";

const useAuth = () => {
  const [login, setlogin] = useContext(loginstate_context);
  const auth = getAuth();

  useEffect(() => {}, []);

  const Getstate = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setlogin("loggedin");
        // const uid = user.uid;
      } else {
        setlogin("loggedout");
      }
    });
  };

  return [login];
};

export default useAuth;
