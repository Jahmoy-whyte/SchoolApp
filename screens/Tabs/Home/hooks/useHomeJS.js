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
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import {
  loginstate_context,
  userinfo_context,
  notify_context,
} from "../../../../context/GBContext";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useHomeJS = () => {
  const WIDTH = Dimensions.get("screen").width / 2 - 15;
  const nav = useNavigation();
  const [userinfo, setuserinfo] = useContext(userinfo_context);
  const [notify, setnotify] = useContext(notify_context);
  const [data, setdata] = useState({
    profileinfo: [],
    loading: true,
  });

  // create account function with firebase
  useEffect(() => {
    FN_GetAccount();
    recentnoti();
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

      setuserinfo((prev) => ({
        ...prev,
        allinfo: arr,
        parentname: arr[0].Parentname,
        parentemail: arr[0].Parentemail,
      }));

      setdata((prev) => ({ ...prev, loading: false, profileinfo: arr }));
    } catch (error) {
      setdata((prev) => ({ ...prev, loading: false }));
      Alertshow("Error Getting Account Infomation");
    }
  };

  const recentnoti = async () => {
    try {
      const docRef = doc(db, "Metadata", "data");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const lastnoti = await AsyncStorage.getItem("@lastnoti");
        lastnoti != null ? lastnoti : null;

        //console.log(JSON.stringify(""));
        let recentnoti1 = JSON.stringify(
          docSnap.data()?.RecentNotificationTime
        );
        if (lastnoti !== recentnoti1) {
          //  alert("not the same");
          setnotify((prev) => ({
            ...prev,
            lastupdatednoti: recentnoti1,
            showbage: true,
          }));
        }

        // console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return [data, nav, userinfo, WIDTH, notify];
};

export default useHomeJS;
