import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Globalstyles } from "../../../../assets/styles/Globalstyles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Articles = ({ WIDTH }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, { width: WIDTH }]}
      onPress={() => nav.navigate("News")}
    >
      <View style={styles.textandicon}>
        <Entypo name="text-document" size={20} color="#198508" />
        <Text style={styles.title}>Dress Code</Text>
      </View>
      <Text style={Globalstyles.txtsmallgray2}>
        A set of rules about what clothing may and may not be worn at a school,
        office, restaurant, etc.{" "}
        <Text style={styles.learnmore}>Learn More..</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 15,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    marginBottom: 10,
  },

  textandicon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  title: {
    fontFamily: "interbold",
    fontSize: 14,
  },

  learnmore: {
    color: "#198508",
    fontFamily: "interregular",
    fontSize: 12,
  },
});
export default Articles;
