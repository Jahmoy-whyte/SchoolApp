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
import {
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

import { memo } from "react";
const Subjectview = ({ data, nav }) => {
  // console.log(data);
  return (
    <TouchableOpacity
      style={styles.maincontainer}
      onPress={() =>
        nav.navigate("subject", {
          studentid: data.studentid,
          Subject: data.Subject,
          docid: data.docid,
          TeacherDocid: data.TeacherDocid,
        })
      }
    >
      <View style={styles.topinfo}>
        <View style={styles.container}>
          <MaterialIcons name="bookmark-outline" size={24} color="#B3B3B3" />
          <View style={styles}>
            <Text style={Globalstyles.txtlarge4}>{data.Subject}</Text>
            <View style={styles.daysstyle}>
              {data.Days.map((day, index) => {
                return (
                  <Text style={Globalstyles.txtsmallgray2} key={index}>
                    {day}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={34} color="#198508" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smallcardcontainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    marginTop: 15,
    alignItems: "center",
    flex: 1,
  },
  iconhold: {
    borderRadius: 6,
    padding: 5,
    backgroundColor: "#198508",
  },
  smallcardtxt: {
    fontFamily: "interregular",
    fontSize: 12,
    flex: 1,
  },
  //==================
  topinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  //===================================================
  maincontainer: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#B3B3B3",
    flexDirection: "column",

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
    borderWidth: 1,
    borderColor: "gray",
  },

  nameandgrade: {
    flex: 1,
  },
  daysstyle: {
    flexDirection: "row",
    gap: 5,
  },

  homeworkandgrades: {
    flexDirection: "row",
    gap: 10,
  },
});
export default memo(Subjectview);
