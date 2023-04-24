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
      <View style={styles.container}>
        {data.image === "" ? (
          <MaterialIcons name="subject" size={24} color="#198508" />
        ) : (
          <Image
            source={{ uri: data.image }}
            style={{ width: 30, height: 30 }}
          />
        )}

        <View style={styles}>
          <Text style={Globalstyles.txtsmallbold1}>{data.Subject}</Text>
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
});
export default memo(Subjectview);
