import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FireAuth } from "../../../FirebaseConfig";
import Alertshow from "../../../helper/Alerts/Alertshow";
const useSignupJS = () => {
  const nav = useNavigation();
  const [textbox, settextbox] = useState({
    email: "",
    phone: "",
    password: "",
    checkbox: false,
  });
  const [loading, setloading] = useState(false);

  // create account function with firebase

  const FN_createAccount = () => {
    if (FN_textboxcheck() === false) return;

    setloading(true);
    createUserWithEmailAndPassword(
      FireAuth,
      textbox.email.trim(),
      textbox.password.trim()
    )
      .then((userCredential) => {
        setloading(false);
        nav.navigate("verify", {
          email: textbox.email.trim(),
          password: textbox.password.trim(),
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setloading(false);
        Alertshow(errorCode);
      });
  };

  const FN_textboxcheck = () => {
    // let bool = false
    if (textbox.email === "") {
      Alertshow("Please Enter Your Email");
      return false;
    } else if (textbox.phone === "") {
      Alertshow("Please Enter Your Phone Number");
      return false;
    } else if (textbox.password === "") {
      Alertshow("Please Enter A password");
      return false;
    } else if (textbox.checkbox === false) {
      Alertshow("Agree Our Privacy Policy");
      return false;
    }
    return true;
  };
  return [textbox, settextbox, nav, FN_createAccount, loading];
};

export default useSignupJS;
