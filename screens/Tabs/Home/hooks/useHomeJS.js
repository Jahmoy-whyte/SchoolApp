import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FireAuth } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import {
  loginstate_context,
  userinfo_context,
} from "../../../../context/GBContext";
const useHomeJS = () => {
  const nav = useNavigation();
  const [userinfo, setuserinfo] = useContext(userinfo_context);
  const [data, setdata] = useState({
    profileinfo: [],
    loading: true,
  });

  // create account function with firebase
  useEffect(() => {
    FN_GetAccount();
  }, []);

  const FN_GetAccount = async () => {
    try {
      const q = query(
        collection(db, "Student"),
        where("Parentemail", "==", FireAuth.currentUser.email)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        setdata((prev) => ({ ...prev, loading: false }));
        Alertshow("Account Infomation Not Found");
        return;
      }
      const arr = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        arr.push({ ...doc.data(), docid: doc.id });
      });
      setuserinfo({
        parentname: arr[0].Parentname,
        parentemail: arr[0].Parentemail,
      });
      setdata((prev) => ({ ...prev, loading: false, profileinfo: arr }));
    } catch (error) {
      setdata((prev) => ({ ...prev, loading: false }));
      Alertshow("Error Getting Account Infomation");
    }
  };

  return [data, nav, userinfo?.parentname];
};

export default useHomeJS;
