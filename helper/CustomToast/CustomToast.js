import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export const toastConfig = {
  cs_error: ({ text1, props }) => (
    <View style={styles.toastview}>
      <View style={styles.toastdisplay}>
        <AntDesign name="closecircleo" size={20} color="black" />
        <View style={styles.titleandmsg}>
          <Text style={styles.title}>Error</Text>
          <Text style={styles.msg}>{text1}</Text>
        </View>
      </View>
    </View>
  ),

  cs_success: ({ text1, props }) => (
    <View style={styles.toastview}>
      <View style={[styles.toastdisplay, { backgroundColor: "#B6F8C4" }]}>
        <AntDesign name="checkcircleo" size={20} color="black" />
        <View style={styles.titleandmsg}>
          <Text style={styles.title}>Success</Text>
          <Text style={styles.msg}>{text1}</Text>
        </View>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastview: {
    width: "100%",
  },
  toastdisplay: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "tomato",
  },
  titleandmsg: {
    flex: 1,
  },
  title: {
    fontFamily: "interbold",
    fontSize: 12,
  },
  msg: {
    fontFamily: "interregular",
    fontSize: 12,
  },
});
