import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import Backbutton from "../../../components/Backbutton/Backbutton";
import LoadingScreen from "../../Loading/LoadingScreen";
import useProfileInfoJS from "./hooks/useProfileInfoJS";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Subjectview from "./components/Subjectview";
import { StatusBar as Expostatusbar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
const ProfileInfoScreen = ({ navigation, route }) => {
  const routehook = useRoute();
  const { grade, name, image, studentid } = route.params;
  const [data, nav] = useProfileInfoJS({ ...route.params });
  return (
    <>
      <View style={styles.backdrop}></View>
      <Expostatusbar style={routehook.name !== "Home" ? "light" : "dark"} />
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.backbuttonview}>
          <Backbutton color="white" />
          <Text style={styles.title}>Profile</Text>
        </View>
        {data.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={Globalstyles.scrollcontainer}>
            <View style={styles.imgcontainer}>
              {image === "" ? (
                <View style={styles.userview}>
                  <AntDesign name="user" size={24} color="#B3B3B3" />
                </View>
              ) : (
                <Image
                  resizeMode="contain"
                  style={styles.userview}
                  source={{ uri: image }}
                />
              )}

              <View style={styles.nameandgrade}>
                <Text style={Globalstyles.txtlarge4}>{name}</Text>
                <Text style={Globalstyles.txtsmallgray1}>Grade: {grade}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.infocontainer2}>
              <MaterialCommunityIcons
                name="book-open-outline"
                size={24}
                color="#B3B3B3"
              />
              <View style={styles.infotxtcontainer}>
                <Text style={Globalstyles.txtlarge4}>Home Work</Text>
                <Text style={Globalstyles.txtsmallgray1}>
                  Check On Upcoming and New Home work
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infocontainer}>
              <Octicons name="graph" size={24} color="#B3B3B3" />
              <View style={styles.infotxtcontainer}>
                <Text style={Globalstyles.txtlarge4}>Attendance</Text>
                <Text style={Globalstyles.txtsmallgray1}>
                  Check On Daily Attendance
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.subjectcontainer}>
              {data.classes.map((data) => {
                return <Subjectview data={data} nav={nav} key={data.docid} />;
              })}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  backdrop: {
    backgroundColor: "#198508",
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  backbuttonview: {
    backgroundColor: "#198508",
    paddingBottom: 15,
  },

  userview: {},

  imgcontainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  subjectcontainer: {
    marginVertical: 15,

    flex: 1,
    gap: 15,
  },

  infocontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    gap: 10,
  },

  infocontainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    //  borderBottomWidth: 0.5,
    // borderBottomColor: "#B3B3B3",
    gap: 10,
  },

  infotxtcontainer: {
    flex: 1,
  },
  nameandgrade: {
    flex: 1,
  },
});
export default ProfileInfoScreen;
