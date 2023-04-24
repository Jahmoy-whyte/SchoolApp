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
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Subjectview from "./components/Subjectview";

const ProfileInfoScreen = ({ navigation, route }) => {
  const { grade, name, image, studentid } = route.params;
  const [data, nav] = useProfileInfoJS({ ...route.params });
  return (
    <>
      <View style={styles.backdrop}></View>

      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.backbuttonview}>
          <Backbutton color="white" />
        </View>
        {data.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={Globalstyles.scrollcontainer}>
            <View style={styles.imgcontainer}>
              <Text style={Globalstyles.txtlarge1}>Profile</Text>

              {image === "" ? (
                <View style={styles.userview}>
                  <AntDesign name="user" size={40} color="white" />
                </View>
              ) : (
                <Image
                  resizeMode="contain"
                  style={styles.userview}
                  source={{ uri: image }}
                />
              )}

              <Text style={Globalstyles.txtlarge3}>{name}</Text>
              <Text style={Globalstyles.txtsmallgray1}>Grade: {grade}</Text>
            </View>

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

  userview: {
    width: 110,
    height: 110,
    borderRadius: 100,
    //borderWidth: 1,
    borderColor: "#B3B3B3",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDE59",
    marginVertical: 15,
    borderWidth: 0.5,
  },

  imgcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subjectcontainer: {
    marginVertical: 15,

    flex: 1,
    gap: 15,
  },
});
export default ProfileInfoScreen;
