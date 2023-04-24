import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
const Backbutton = ({ color = "black", disable = false }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      disabled={disable}
      style={styles.btncontainer}
      onPress={() => nav.goBack()}
    >
      <MaterialIcons name="arrow-back-ios" size={15} color={color} />
      <Text allowFontScaling={false} style={[styles.txt, { color: color }]}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontFamily: "interbold",
    fontSize: 14,
  },
});
export default Backbutton;
