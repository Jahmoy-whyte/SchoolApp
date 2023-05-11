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
import { StatusBar as Expostatusbar } from "expo-status-bar";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import Button from "../../../components/button/Button";
import useAccountJS from "./hooks/useAccountJS";
import { useIsFocused } from "@react-navigation/native";
const AccountScreen = () => {
  const [FN_Logout, email, userinfo] = useAccountJS();
  const isfocused = useIsFocused();
  return (
    <>
      <Expostatusbar style={isfocused === true ? "dark" : "light"} />
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Text style={styles.heading}>Account</Text>
        </View>
        <ScrollView style={Globalstyles.scrollcontainer}>
          <View style={styles.optioncontainer2}>
            <AntDesign name="user" size={24} color="black" />
            <View style={styles.nameandemail}>
              <Text style={styles.optiontxt}>{userinfo?.parentname}</Text>
              <Text style={Globalstyles.txtsmallgray2}>
                {userinfo?.parentemail}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.optioncontainer}>
            <Ionicons name="ios-settings-outline" size={24} color="black" />
            <Text style={styles.optiontxt}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optioncontainer}>
            <Feather name="help-circle" size={24} color="black" />
            <Text style={styles.optiontxt}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optioncontainer}>
            <MaterialIcons name="web-asset" size={24} color="black" />
            <Text style={styles.optiontxt}>Privacy Policy </Text>
          </TouchableOpacity>

          <Button text={"Login Out"} Function={FN_Logout} />
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
    //  backgroundColor: "#198508",
    marginTop: 15,
  },
  heading: {
    // color: "white",
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
  },

  accountinfoandinital: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDE59",
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  inital: {
    color: "white",
    fontFamily: "interbold",
    fontSize: 20,
  },
  optioncontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    marginBottom: 15,
  },

  optioncontainer2: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,

    //borderBottomColor: "#B3B3B3",
    //  borderBottomWidth: 0.5,
  },

  optiontxt: {
    fontFamily: "interbold",
    fontSize: 14,
  },
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
});
export default AccountScreen;
