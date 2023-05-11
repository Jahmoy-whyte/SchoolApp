import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

import { memo } from "react";
import Backbutton from "../../../components/Backbutton/Backbutton";
const Schoolinfo = () => {
  return (
    <>
      <View style={styles.backdrop}></View>

      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Backbutton color="white" />
        </View>
        <ScrollView style={styles.scrollcontainer}>
          <Image
            style={styles.bannerimg}
            source={require("../../../assets/images/banner.png")}
          />
          <View style={styles.infocontainer}>
            <Image
              style={styles.accounticon}
              source={require("../../../assets/cu_icon.png")}
            />
            <Text style={styles.heading}>Old Harbour High School</Text>

            <Text style={Globalstyles.txtsmall2}>
              On October 12th, 1969, the Old Harbour High officially began its
              journey in Pursuit of Excellence. At the time of the inception it
              was a Junior Secondary school with a student population of 1000
              <Text style={styles.learnmore}> Learn More</Text>
            </Text>

            <TouchableOpacity style={styles.card}>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text style={styles.cardtxt}>
                33 SOUTH STREET, OLD HARBOUR, ST. CATHERINE, JAMAICA W.I.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Feather name="phone" size={24} color="black" />
              <Text style={styles.cardtxt}>1876983-2377, 1876745-1328</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <MaterialIcons name="web-asset" size={24} color="black" />
              <Text style={styles.cardtxt}>https://oldharbourhigh.com/</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    paddingBottom: 15,
  },
  heading: {
    fontFamily: "interbold",
    fontSize: 16,
    marginBottom: 5,
  },

  learnmore: {
    fontFamily: "interbold",
    fontSize: 12,
    color: "#198508",
  },
  scrollcontainer: {
    flex: 1,
  },
  bannerimg: {
    width: "100%",
    height: 121,
  },

  accounticon: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  infocontainer: {
    position: "relative",
    top: -40,
    paddingHorizontal: 10,
  },
  card: {
    marginTop: 15,
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    gap: 10,
  },
  cardtxt: {
    flex: 1,
    fontSize: 12,
    fontFamily: "interregular",
  },
  w: {},
  w: {},
  w: {},
  w: {},
  w: {},
  w: {},
  w: {},
});
export default Schoolinfo;
