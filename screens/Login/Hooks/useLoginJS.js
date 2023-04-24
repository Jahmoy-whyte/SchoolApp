import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { FireAuth } from "../../../FirebaseConfig";
import Alertshow from "../../../helper/Alerts/Alertshow";

import { signInWithEmailAndPassword } from "firebase/auth";
import { loginstate_context } from "../../../context/GBContext";
const useLoginJS = () => {
  const [login, setlogin] = useContext(loginstate_context);
  const nav = useNavigation();
  const [textbox, settextbox] = useState({
    email: "",
    password: "",
    loading: false,
  });

  // create account function with firebase

  const FN_Login = () => {
    if (FN_textboxcheck() === false) return;
    settextbox((prev) => ({ ...prev, loading: true }));
    signInWithEmailAndPassword(
      FireAuth,
      textbox.email.trim(),
      textbox.password.trim()
    )
      .then((userCredential) => {
        settextbox((prev) => ({ ...prev, loading: false }));
        if (userCredential.user.emailVerified === false) {
          nav.navigate("verify", {
            email: textbox.email.trim(),
            password: textbox.password.trim(),
          });
          return;
        }
        setlogin("loggedin");
      })
      .catch((error) => {
        Alertshow(error.code);
        settextbox((prev) => ({ ...prev, loading: false }));
      });
  };

  const FN_textboxcheck = () => {
    if (textbox.email === "") {
      Alertshow("Please Enter Your Email");
      return false;
    } else if (textbox.password === "") {
      Alertshow("Please Enter Your password");
      return false;
    }
    return true;
  };
  return [textbox, settextbox, nav, FN_Login];
};

export default useLoginJS;
