import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import Backbutton from "../../../components/Backbutton/Backbutton";

import { StatusBar as Expostatusbar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
const NewsScreen = () => {
  const routehook = useRoute();
  return (
    <>
      <Expostatusbar style={routehook.name !== "Home" ? "light" : "dark"} />
      <View style={styles.backdrop}></View>

      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Backbutton color="white" />
          <Text style={styles.heading}>News</Text>
        </View>
        <View style={styles.txtview}>
          <Text style={styles.txt}>No News Available</Text>
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

  headingview: {
    backgroundColor: "#198508",
  },
  heading: {
    fontFamily: "interbold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  txtview: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontFamily: "interregular",
    fontSize: 15,
  },
});

export default NewsScreen;
