import { useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FireAuth } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";
import { userinfo_context } from "../../../../context/GBContext";

const useAccountJS = () => {
  const [userinfo, setuserinfo] = useContext(userinfo_context);
  const FN_Logout = () => {
    signOut(FireAuth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        Alertshow(error.code);
      });
  };
  return [FN_Logout, FireAuth.currentUser.email, userinfo];
};

export default useAccountJS;
