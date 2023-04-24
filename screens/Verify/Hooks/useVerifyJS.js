import { useState, useEffect, useContext } from "react";
import Alertshow from "../../../helper/Alerts/Alertshow";
import { FireAuth } from "../../../FirebaseConfig";

import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { loginstate_context } from "../../../context/GBContext";

const useVerifyJS = ({ email, password }) => {
  const [login, setlogin] = useContext(loginstate_context);

  const [verifystate, setverifystate] = useState({
    loading: false,
    disable: false,
    sendagainload: false,
  });
  useEffect(() => {
    FN_sendcode(true);
  }, []);

  const statereset = () => {
    setverifystate({
      loading: false,
      disable: false,
      sendagainload: false,
    });
  };

  const FN_sendcode = (firsttime) => {
    setverifystate({
      loading: false,
      disable: true,
      sendagainload: firsttime == true ? false : true,
    });
    sendEmailVerification(FireAuth.currentUser)
      .then(() => {
        if (firsttime === false) {
          Alertshow("Code Sent", "cs_success");
          return;
        }

        statereset();
      })
      .catch((error) => {
        statereset();
        Alertshow(error.code);
      });
  };

  const FN_checkverifedstatus = async () => {
    setverifystate((prev) => ({
      ...prev,
      loading: true,
    }));
    FireAuth.currentUser
      .reload()
      .then(() => {
        if (FireAuth.currentUser.emailVerified === false) {
          Alertshow("Email Not Verified");
          //statereset();
          return;
        }
        FN_login();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const FN_login = () => {
    signInWithEmailAndPassword(FireAuth, email, password)
      .then((userCredential) => {
        //  const user = userCredential.user;
        statereset();
        setlogin("loggedin");
      })
      .catch((error) => {
        statereset();
        Alertshow(error.code);
      });
  };

  return [FN_sendcode, FN_checkverifedstatus, verifystate];
};

export default useVerifyJS;
