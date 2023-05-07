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
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import useHomeJS from "./hooks/useHomeJS";
import Profile from "./components/Profile";
import LoadingScreen from "../../Loading/LoadingScreen";
import Articles from "./components/Articles";
//import Button from "../../../components/button/Button";
//import { getAuth, signOut } from "firebase/auth";
//import { FireAuth } from "../../../FirebaseConfig";
import useNotify from "../../../useNotify";
import Notification from "./components/Notification";
import useVerifyToken from "./hooks/useVerifyToken";
import { useRoute } from "@react-navigation/native";
const HomeScreen = () => {
  const routehook = useRoute();
  const [tokenresponse, opensettings, register] = useNotify();
  const [data, nav, userinfo, WIDTH, notify] = useHomeJS();
  const [Copytoken] = useVerifyToken(tokenresponse);

  const Heading = () => {
    return (
      <View style={styles.headercontainer}>
        <View style={styles.nameandwellcome}>
          <Text onPress={Copytoken} style={styles.nametxt}>
            Hi {userinfo?.parentname}!
          </Text>
          <Text style={styles.wellcometxt}>Wellcome Back</Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate("notifications")}>
          <View
            style={{
              width: 10,
              height: 10,
              position: "absolute",
              backgroundColor: "red",
              borderRadius: 10,
              right: 0,
              top: -1,
              zIndex: 1,
              display: notify?.showbage === false ? "none" : null,
            }}
          ></View>
          <Feather name="bell" size={20} color={"black"} />
        </TouchableOpacity>
      </View>
    );
  };

  const Newssct = () => {
    return (
      <TouchableOpacity
        style={styles.newsmaincontainer}
        onPress={() => nav.navigate("News")}
      >
        <View style={styles.imgcontainter}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/news2.png")}
            style={styles.newsimg}
          />
        </View>

        <View style={styles.test1}>
          <TouchableOpacity
            style={styles.newscontainer}
            onPress={() => nav.navigate("News")}
          >
            <View style={styles.newstitleandtext}>
              <FontAwesome name="newspaper-o" size={20} color="white" />
              <Text style={styles.newstitle}>News</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.eventcontainer}
            onPress={() => nav.navigate("calender")}
          >
            <View style={styles.eventtxtandicon}>
              <AntDesign name="calendar" size={20} color="white" />
              <Text style={styles.eventtxt}>Events</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Expostatusbar style={routehook.name === "Home" ? "dark" : "light"} />

      <SafeAreaView style={Globalstyles.container}>
        <Heading />

        {tokenresponse === false ? (
          <Notification Register={register} opensettings={opensettings} />
        ) : data.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={styles.scrollcontainer}>
            <Newssct />

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
            <Articles WIDTH={WIDTH} />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  test1: {
    flexDirection: "row",
    flex: 1,
  },
  // ========================== eventcontainer ===================
  eventcontainer: {
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,

    borderBottomRightRadius: 6,
  },
  eventtxtandicon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  eventtxt: {
    fontFamily: "interbold",
    color: "white",
    fontSize: 14,
    flex: 1,
  },

  // ======================== start =============================
  backdrop: {
    backgroundColor: "#198508",
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  scrollcontainer: {
    flex: 1,
    paddingHorizontal: 10,

    backgroundColor: "white",
  },
  nameandwellcome: {
    flex: 1,
  },
  nametxt: {
    fontFamily: "interbold",
    fontSize: 20,
  },
  wellcometxt: {
    fontFamily: "interregular",
    fontSize: 12,
  },
  datetxt: {
    fontFamily: "interregular",
    fontSize: 12,
  },

  // ===================== news ==========================================
  newsmaincontainer: {
    backgroundColor: "#198508",
    borderRadius: 6,
    flexDirection: "column",
  },
  newscontainer: {
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomLeftRadius: 6,
  },
  imgcontainter: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  newsimg: {
    width: 110,
    height: 110,
  },
  newstitleandtext: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  newstitle: {
    fontFamily: "interbold",
    fontSize: 14,
    color: "white",
    flex: 1,
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
