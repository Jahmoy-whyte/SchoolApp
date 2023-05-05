import { useState, useEffect, useCallback, useMemo } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Alertshow from "../../../../helper/Alerts/Alertshow";
const useSubjectdata = ({ studentid, Subject, docid, TeacherDocid }) => {
  useEffect(() => {
    getgrades();
    // console.log(Getweeks());
  }, []);
  const [data, setdata] = useState({
    data: [],
    loading: true,
  });

  const getgrades = async () => {
    try {
      const q = query(
        collection(db, "Teachers", TeacherDocid, "Classes", docid, "Grades"),
        where("Studentid", "==", studentid)
      );
      const arr = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arr.push({ ...doc.data(), docid: doc.id });
        //  console.log(doc.id, " => ", doc.data());
      });
      console.log(arr);
      setdata({ data: arr, loading: false });
    } catch (error) {
      setdata({ data: [], loading: false });
      Alertshow(error.code);
    }
  };

  const calulateavg = useMemo(() => {
    let addedgrades = 0;
    let garde = "";
    data.data.map((info) => {
      garde = info.Grade.replace("%", "");
      addedgrades += parseFloat(garde) / 100;
    });
    addedgrades = addedgrades / parseInt(data.data.length);
    addedgrades = addedgrades * 100;

    return data.data.length > 0 ? addedgrades : 0;
  }, [data.data]);

  return [data, calulateavg];
};
export default useSubjectdata;
