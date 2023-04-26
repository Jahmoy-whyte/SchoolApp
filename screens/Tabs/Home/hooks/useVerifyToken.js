import { useContext, useEffect } from "react";
import * as Clipboard from "expo-clipboard";
import { userinfo_context } from "../../../../context/GBContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import Alertshow from "../../../../helper/Alerts/Alertshow";

const useVerifyToken = (tokenresponse) => {
  const [userinfo, setuserinfo] = useContext(userinfo_context);

  useEffect(() => {
    AddNotifytoken(tokenresponse, userinfo);
  }, [tokenresponse, userinfo]);

  const AddNotifytoken = async (tokenresponse, userinfo) => {
    if (
      tokenresponse === false ||
      tokenresponse === "" ||
      userinfo?.allinfo === undefined
    )
      return;

    let status = false;
    try {
      for (let i = 0; i < userinfo.allinfo.length; i++) {
        let response = userinfo.allinfo[i].NotificationToken.find(
          (token) => token === tokenresponse
        );
        // console.log("token is found ============" + response);

        if (response === undefined) {
          const accountdoc = doc(db, "Student", userinfo.allinfo[i].docid);
          await updateDoc(accountdoc, {
            NotificationToken: arrayUnion(tokenresponse),
          });
        }
      }
    } catch (error) {
      Alertshow(error.code);
      console.log(error);
    }

    return status;
  };

  const Copytoken = async () => {
    await Clipboard.setStringAsync(JSON.stringify(tokenresponse));
    alert(tokenresponse);
  };

  return [Copytoken];
};

export default useVerifyToken;
