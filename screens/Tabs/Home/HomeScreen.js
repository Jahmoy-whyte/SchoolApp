import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar as Expostatusbar } from "expo-status-bar";

import { Globalstyles } from "../../../assets/styles/Globalstyles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useHomeJS from "./hooks/useHomeJS";
import Profile from "./components/Profile";
import LoadingScreen from "../../Loading/LoadingScreen";
import Articles from "./components/Articles";
//import Button from "../../../components/button/Button";
//import { getAuth, signOut } from "firebase/auth";
//import { FireAuth } from "../../../FirebaseConfig";
import useNotify from "../../../useNotify";
import Notification from "./components/Notification";

const HomeScreen = () => {
  const [tokenresponse, opensettings, register] = useNotify();
  const [data, nav, name, Copytoken] = useHomeJS(tokenresponse);
  // console.log(response);
  const Heading = () => {
    return (
      <View style={styles.headercontainer}>
        <View style={styles.nameandwellcome}>
          <Text onPress={Copytoken} style={styles.nametxt}>
            Hi {name}!
          </Text>
          <Text style={styles.wellcometxt}>Wellcome Back</Text>
        </View>
        <Text style={styles.datetxt}>Tues 14 2023</Text>
      </View>
    );
  };

  return (
    <>
      <Expostatusbar style={"light"} />
      <View style={styles.backdrop}></View>
      <SafeAreaView style={Globalstyles.container}>
        <Heading />

        {tokenresponse === false ? (
          <Notification Register={register} opensettings={opensettings} />
        ) : data.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={styles.scrollcontainer}>
            <TouchableOpacity
              style={styles.newsmaincontainer}
              onPress={() => nav.navigate("News")}
            >
              <View style={styles.newscontainer}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/images/news2.png")}
                  style={styles.newsimg}
                />

                <View style={styles.newstitleandtext}>
                  <Text style={styles.newstitle}>News</Text>
                  <Text style={styles.newssubtext}>
                    No New Info Is Available
                  </Text>
                </View>
              </View>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.mainheadings}>Profile</Text>

            <View style={styles.profileinfoview}>
              {data.profileinfo?.map((data) => {
                return <Profile data={data} key={data.docid} nav={nav} />;
              })}
            </View>

            <Text style={styles.mainheadings}>Articles</Text>

            <View style={styles.Articlesview}>
              <Articles />
              <Articles />
            </View>
            <Articles />
          </ScrollView>
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

  headercontainer: {
    backgroundColor: "#198508",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  scrollcontainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  nameandwellcome: {
    flex: 1,
  },
  nametxt: {
    fontFamily: "interbold",
    fontSize: 20,
    color: "white",
  },
  wellcometxt: {
    fontFamily: "interregular",
    fontSize: 12,
    color: "white",
  },
  datetxt: {
    fontFamily: "interregular",
    fontSize: 12,
    color: "white",
  },

  // ===================== news ==========================================
  newsmaincontainer: {
    backgroundColor: "#198508",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  newsimg: {
    width: 70,
    height: 70,
  },
  newstitleandtext: {
    flex: 1,
  },
  newstitle: {
    fontFamily: "interbold",
    fontSize: 14,
    color: "white",
  },
  newssubtext: {
    fontFamily: "interregular",
    fontSize: 12,
    color: "white",
  },

  // ============================== mainheadings ===========
  mainheadings: {
    //  marginVertical: 15,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: "interbold",
    fontSize: 18,
  },

  /// ====================== profileinfoview===============
  profileinfoview: {
    flex: 1,
    gap: 15,
  },
  Articlesview: {
    flexDirection: "row",
    //  marginBottom: 15,
    flexWrap: "wrap",
    gap: 10,
    flex: 1,
  },
  b: {},
  b: {},

  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},

  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
});

export default HomeScreen;
