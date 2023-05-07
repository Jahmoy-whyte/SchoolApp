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

  let sentdate = new Date(data?.Date?.seconds * 1000).toDateString();

  return (
    <TouchableOpacity style={styles.maincontainer}>
      <Image
        style={styles.img}
        source={require("../../../../assets/cu_icon.png")}
      />

      <View style={styles.nameandgrade}>
        <Text style={Globalstyles.txtsmallbold1}>{data?.Title}</Text>
        <Text style={Globalstyles.txtsmall2}>{data?.Message}</Text>
        <Text style={styles.datetxt}>
          Date:
          <Text style={Globalstyles.txtsmall2}> {sentdate}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  datetxt: {
    fontSize: 12,
    fontFamily: "interbold",
  },
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
