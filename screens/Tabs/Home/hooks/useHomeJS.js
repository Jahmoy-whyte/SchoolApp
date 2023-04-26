import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FireAuth } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import {
  loginstate_context,
  userinfo_context,
} from "../../../../context/GBContext";
import * as Clipboard from "expo-clipboard";

const useHomeJS = (tokenresponse) => {
  const nav = useNavigation();
  const [userinfo, setuserinfo] = useContext(userinfo_context);
  const [data, setdata] = useState({
    profileinfo: [],
    loading: true,
  });

  // create account function with firebase
  useEffect(() => {
    if (tokenresponse === false || tokenresponse === "") return;
    FN_GetAccount(tokenresponse);
  }, [tokenresponse]);

  const FN_GetAccount = async (tokenresponse) => {
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

      const status = await AddNotifytoken(tokenresponse, arr);

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

  const AddNotifytoken = async (tokenresponse, arr) => {
    let status = false;
    try {
      for (let i = 0; i < arr.length; i++) {
        let response = arr[i].NotificationToken.find(
          (token) => token === tokenresponse
        );
        // console.log("token is found ============" + response);

        if (response === undefined) {
          const accountdoc = doc(db, "Student", arr[i].docid);
          await updateDoc(accountdoc, {
            NotificationToken: arrayUnion(tokenresponse),
          });
        }
      }
      status = true;
    } catch (error) {
      Alertshow(error.code);
    }

    return status;
  };

  const Copytoken = async () => {
    await Clipboard.setStringAsync(tokenresponse);
    alert(tokenresponse);
  };

  return [data, nav, userinfo?.parentname, Copytoken];
};

export default useHomeJS;
