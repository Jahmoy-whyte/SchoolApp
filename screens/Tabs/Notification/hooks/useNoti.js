import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../../FirebaseConfig";
import { FireAuth } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";
import { useNavigation } from "@react-navigation/native";
const useNoti = () => {
  const nav = useNavigation();
  const [noti, setnoti] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getNoti();
  }, []);

  const getNoti = async () => {
    try {
      const q = query(
        collection(db, "Notifications"),
        where("Targetemail", "==", FireAuth.currentUser.email)
      );

      const arr = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docid: doc.id });
        // doc.data() is never undefined for query doc snapshots
        //  console.log(doc.id, " => ", doc.data());
      });

      setnoti((prev) => ({ loading: false, data: arr }));
    } catch (error) {
      Alertshow(error.code);
    }
  };

  return [noti, nav];
};

export default useNoti;
