import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import Backbutton from "../../../components/Backbutton/Backbutton";
import { useRoute } from "@react-navigation/native";
import { StatusBar as Expostatusbar } from "expo-status-bar";
import useNoti from "./hooks/useNoti";
import LoadingScreen from "../../Loading/LoadingScreen";
import Noticards from "./components/Noticards";

const NotificationScreen = () => {
  const [noti, nav] = useNoti();
  const routehook = useRoute();
  return (
    <>
      <View style={styles.backdrop}></View>
      <Expostatusbar style={routehook.name !== "Home" ? "light" : "dark"} />
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Backbutton color="white" />
          <Text style={styles.heading}>Notifications</Text>
        </View>

        {noti.loading === true ? (
          <LoadingScreen />
        ) : noti.data.length === 0 ? (
          <View style={styles.txtview}>
            <Text style={styles.txt}>No Notifications Available</Text>
          </View>
        ) : (
          <FlatList
            data={noti.data}
            renderItem={({ item }) => {
              return <Noticards data={item} nav={nav} key={item.docid} />;
            }}
          />
        )}
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

export default NotificationScreen;
