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

import { memo } from "react";
const Profile = ({ data, nav }) => {
  console.log(data);
  return (
    <TouchableOpacity
      style={styles.maincontainer}
      onPress={() =>
        nav.navigate("profile", {
          grade: data.FormGrade,
          name: data.Firstname + " " + data.Lastname,
          image: data.image,
          studentid: data.docid,
        })
      }
    >
      <View style={styles.container}>
        {data.image === "" ? (
          <View style={styles.userview}>
            <AntDesign name="user" size={34} color="white" />
          </View>
        ) : (
          <Image style={styles.img} source={{ uri: data.image }} />
        )}

        <View style={styles.nameandgrade}>
          <Text style={Globalstyles.txtsmallbold1}>
            {data?.Firstname + " " + data?.Lastname}
          </Text>
          <Text style={Globalstyles.txtsmallgray2}>
            Grade: {data?.FormGrade}
          </Text>
        </View>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={34} color="#198508" />
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
  },

  userview: {
    width: 70,
    height: 70,
    borderRadius: 100,
    //borderWidth: 1,
    // borderColor: "#B3B3B3",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDE59",
  },

  nameandgrade: {
    flex: 1,
  },
});
export default memo(Profile);
