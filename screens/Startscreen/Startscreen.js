import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { Globalstyles } from "../../assets/styles/Globalstyles";
import { StatusBar as Expostatusbar } from "expo-status-bar";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Startscreen = () => {
  const isfocused = useIsFocused();
  const nav = useNavigation();
  return (
    <>
      <View style={styles.backdrop}></View>
      <Expostatusbar style={isfocused ? "light" : "dark"} />
      <SafeAreaView style={styles.container}>
        <View style={styles.topcontainer}>
          <Image
            style={styles.topimg}
            resizeMode="contain"
            source={require("../../assets/images/test4.png")}
          />
        </View>

        <View style={styles.bottomcontainer}>
          <View style={styles.txtandbtn}>
            <Text style={styles.heading}>OHHS</Text>
            <Text style={styles.subheading}>In Pursuit Of Excellence</Text>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => nav.navigate("login")}
            >
              <Text style={styles.btn1txt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn2}
              onPress={() => nav.navigate("signup")}
            >
              <Text style={styles.btn2txt}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.PrivacyPolicy}>
              Have A Read About Our{" "}
              <Text style={styles.PrivacyPolicytxt}>Privacy Policy </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#198508",
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  container: {
    ...Platform.select({
      ios: {},
      android: { marginTop: StatusBar.currentHeight },
    }),
    backgroundColor: "#198508",

    flex: 1,
    // height: 390,
  },
  topimg: {
    width: "100%",
    height: "100%",
  },
  topcontainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flexDirection: "column",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  heading: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  subheading: {
    fontFamily: "interregular",
    fontSize: 16,
    textAlign: "center",
    color: "#B3B3B3",
    marginBottom: 10,
    color: "white",
  },

  txtandbtn: {},

  btn1: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#198508",
    alignItems: "center",
    paddingVertical: 10,

    marginBottom: 15,
    backgroundColor: "white",
  },
  btn1txt: {
    color: "#198508",
    fontFamily: "interbold",
    fontSize: 14,
  },

  btn2: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "white",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 30,
    backgroundColor: "#198508",
  },
  btn2txt: {
    color: "white",
    fontFamily: "interbold",
    fontSize: 14,
  },

  PrivacyPolicy: {
    fontFamily: "interregular",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,

    color: "white",
  },

  PrivacyPolicytxt: {
    fontFamily: "interbold",
    fontSize: 12,
    color: "white",
  },
});

export default Startscreen;
