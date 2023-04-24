import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Alertshow from "../../../helper/Alerts/Alertshow";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FireAuth } from "../../../FirebaseConfig";
const useResetpasswordJS = () => {
  const nav = useNavigation();
  const [textbox, settextbox] = useState({
    email: "",
    loading: false,
  });

  const FN_resetpassword = () => {
    if (textbox.email === "") {
      Alertshow("Enter Your Email");
      return;
    }
    settextbox((prev) => ({ ...prev, loading: true }));

    sendPasswordResetEmail(FireAuth, textbox.email.trim())
      .then(() => {
        Alertshow("Sent", "cs_success");
        nav.goBack();
      })
      .catch((error) => {
        settextbox((prev) => ({ ...prev, loading: false }));
        Alertshow(error.code);
      });
  };

  return [textbox, settextbox, FN_resetpassword];
};
export default useResetpasswordJS;
