import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { db } from "../../../../FirebaseConfig";
import { FireAuth } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";
import { useNavigation } from "@react-navigation/native";
import { notify_context } from "../../../../context/GBContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useNoti = () => {
  const nav = useNavigation();
  const [notify, setnotify] = useContext(notify_context);
  const [noti, setnoti] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getNoti();
  }, []);

  const getNoti = async () => {
    try {
      const q = query(collection(db, "Notifications"), orderBy("Date", "desc"));

      const arr = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docid: doc.id });
        // doc.data() is never undefined for query doc snapshots
        //  console.log(doc.id, " => ", doc.data());
      });
      storenotiData();
      setnoti((prev) => ({ loading: false, data: arr }));
    } catch (error) {
      setnoti((prev) => ({ ...prev, loading: false }));
      Alertshow(error.code);
    }
  };

  const storenotiData = async () => {
    if (notify.showbage === false) return;

    console.log("wwwww");

    if (notify?.lastupdatednoti) {
      try {
        await AsyncStorage.setItem("@lastnoti", notify?.lastupdatednoti);
        setnotify((prev) => ({ ...prev, showbage: false }));
      } catch (e) {
        Alertshow("storage error");
      }
    }
  };

  return [noti, nav];
};

export default useNoti;
