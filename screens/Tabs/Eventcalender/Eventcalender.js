import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import Backbutton from "../../../components/Backbutton/Backbutton";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar as Expostatusbar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

const Eventcalender = () => {
  const arr = Array.from("123456789");
  console.log(arr);

  const routehook = useRoute();

  return (
    <>
      <View style={styles.backdrop}></View>
      <Expostatusbar style={routehook.name !== "Home" ? "light" : "dark"} />

      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Backbutton color="white" />
          <Text style={styles.title}>Event Calendar</Text>
        </View>
        <ScrollView style={styles.scrollcontainer}>
          <TouchableOpacity style={styles.eventcardcontainer}>
            <View style={styles.eventcard}>
              <AntDesign name="calendar" size={24} color="#B3B3B3" />
              <View style={styles.eventcardflex}>
                <Text style={styles.eventcardtxt2}>PTA Meeting</Text>
                <Text style={styles.eventcardtxt1}>Thursday 5</Text>

                <Text style={styles.eventcardtxt1}>9:00am</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.eventcardcontainer}>
            <View style={styles.eventcard}>
              <AntDesign name="calendar" size={24} color="#B3B3B3" />
              <View style={styles.eventcardflex}>
                <Text style={styles.eventcardtxt2}>Career Day</Text>
                <Text style={styles.eventcardtxt1}>Thursday 10</Text>

                <Text style={styles.eventcardtxt1}>9:00am</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 15,
  },
  backdrop: {
    backgroundColor: "#198508",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  headingtxt: {
    fontFamily: "interbold",
    fontSize: 14,
  },
  headingview: {
    backgroundColor: "#198508",
  },
  eventcardcontainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,

    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
  },
  eventcardtxt1: {
    fontFamily: "interregular",
    fontSize: 14,
  },
  eventcardtxt2: {
    fontFamily: "interbold",
    fontSize: 14,
  },
  eventcardtxt2: {
    fontFamily: "interbold",
    fontSize: 14,
  },
  eventimg: {
    width: 80,
    height: 80,
  },
  eventcardside: {
    width: 5,
    backgroundColor: "#198508",
    borderRadius: 6,
  },
  eventcard: {
    gap: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  eventcardflex: {
    flex: 1,
  },
  d: {},
  d: {},
  d: {},
  d: {},
  d: {},
});

export default Eventcalender;
