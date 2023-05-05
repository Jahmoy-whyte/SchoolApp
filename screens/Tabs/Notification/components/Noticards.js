import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Globalstyles } from "../../../../assets/styles/Globalstyles";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { memo } from "react";
const Noticards = ({ data, nav, fun }) => {
  //  console.log(data);
  return (
    <TouchableOpacity
      style={styles.maincontainer}
      onPress={() => {
        data.Shouldnav === true
          ? nav.navigate("subject", {
              studentid: data.Studentid,
              Subject: data.Subject,
              docid: data.Classid,
              TeacherDocid: data.TeacherDocid,
            })
          : null;
      }}
    >
      <Image
        style={styles.img}
        source={require("../../../../assets/cu_icon.png")}
      />

      <View style={styles.nameandgrade}>
        <Text style={Globalstyles.txtsmallbold1}>{data?.Title}</Text>
        <Text style={Globalstyles.txtsmallgray2}>Grade: {data?.Message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  img: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
  },

  nameandgrade: {
    flex: 1,
  },
});
export default memo(Noticards);