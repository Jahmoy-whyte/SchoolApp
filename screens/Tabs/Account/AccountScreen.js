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
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../components/button/Button";
import useAccountJS from "./hooks/useAccountJS";
const AccountScreen = () => {
  const [FN_Logout, email, userinfo] = useAccountJS();
  return (
    <>
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Text style={styles.heading}>Account</Text>
        </View>
        <ScrollView style={Globalstyles.scrollcontainer}>
          <View style={styles.accountinfocontainer}>
            <View style={styles.accountinfoandinital}>
              <Text style={styles.inital} allowFontScaling={false}>
                {userinfo?.parentname.substring(0, 1)}
              </Text>
            </View>
            <View style={styles.nameandemail}>
              <Text style={Globalstyles.txtlarge3}>{userinfo?.parentname}</Text>
              <Text style={Globalstyles.txtsmallgray1}>
                {userinfo?.parentemail}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.optioncontainer}>
            <AntDesign name="user" size={24} color="black" />
            <Text style={styles.optiontxt}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optioncontainer}>
            <Feather name="help-circle" size={24} color="black" />
            <Text style={styles.optiontxt}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optioncontainer}>
            <MaterialCommunityIcons name="web" size={24} color="black" />
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
    paddingVertical: 15,
  },
  heading: {
    // color: "white",
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
  },
  accountinfocontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    marginBottom: 15,
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
