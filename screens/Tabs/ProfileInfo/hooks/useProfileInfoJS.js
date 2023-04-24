import { useState, useEffect, useContext, useReducer } from "react";
import Alertshow from "../../../../helper/Alerts/Alertshow";

import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
const useProfileInfoJS = ({ grade, name, image, studentid }) => {
  const nav = useNavigation();
  const [data, setdata] = useState({
    loading: true,
    classes: [],
  });
  useEffect(() => {
    Getsubjects();
  }, []);

  const Getsubjects = async () => {
    try {
      const Classes = query(
        collectionGroup(db, "Classes"),
        where("Grade", "==", grade)
      );
      const querySnapshot = await getDocs(Classes);
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docid: doc.id, studentid: studentid });
        //  console.log(doc.id, " => ", doc.data());
      });

      setdata({
        loading: false,
        classes: arr,
      });
    } catch (error) {
      setdata({
        loading: false,
        classes: [],
      });
      console.log(error);
      Alertshow(error.code);
    }
  };
  console.log(data);
  return [data, nav];
};

export default useProfileInfoJS;
