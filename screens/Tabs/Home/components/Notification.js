import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Notification = ({ Register }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../../assets/images/phone.png")}
      />
      <Text style={styles.title}>Notification</Text>
      <Text style={styles.subtxt}>
        Please Enable Notification To Get UpDated On You Childs Grades, News,
        PTA And Events
      </Text>
      <TouchableOpacity style={styles.btn} onPress={Register}>
        <Text style={styles.btntxt}>Enable</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontFamily: "interbold",
    fontSize: 16,
  },
  subtxt: {
    fontFamily: "interregular",
    fontSize: 14,
    textAlign: "center",
    color: "#B3B3B3",
  },
  btn: {
    marginTop: 8,
    backgroundColor: "#198508",
    borderRadius: 6,
  },
  btntxt: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: "white",
    fontFamily: "interbold",
    fontSize: 14,
  },
  d: {},
  d: {},
  d: {},
});
export default Notification;
