import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Globalstyles } from "../../assets/styles/Globalstyles";
import Button from "../../components/button/Button";
import Backbutton from "../../components/Backbutton/Backbutton";
import useVerifyJS from "./Hooks/useVerifyJS";
const VerifyemailScreen = ({ navigation, route }) => {
  const { email, password } = route.params;
  const [FN_sendcode, FN_checkverifedstatus, verifystate] = useVerifyJS({
    ...route.params,
  });

  return (
    <SafeAreaView style={Globalstyles.container}>
      <Backbutton disable={verifystate.disable} />
      <ScrollView style={Globalstyles.scrollcontainer}>
        <View style={styles.imgcontainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/images/email.png")}
          />
        </View>
        <Text style={styles.txtlarge1}>Verification</Text>
        <Text style={styles.txtsmallgray1}>
          Please check your email and click on the link that was sent to{" "}
          <Text style={styles.txthighlight}>{email}</Text> to verify
        </Text>
        <Button
          text={"Verify"}
          Function={() => FN_checkverifedstatus()}
          // loading={verifystate.loading}
        />
        <Text style={styles.noaccount}>
          Not See Your Code?
          <Text
            disabled={verifystate.sendagainload}
            onPress={() => FN_sendcode(false)}
            style={styles.signuptxt}
          >
            {" "}
            {verifystate.sendagainload === true ? "..Loading" : "Send Again"}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    marginBottom: 15,
  },
  imgcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txtlarge1: {
    fontSize: 20,

    textAlign: "center",
    fontFamily: "interbold",
  },
  txtsmallgray1: {
    fontFamily: "interregular",
    fontSize: 14,
    color: "#B3B3B3",
    textAlign: "center",
    marginBottom: 15,
  },
  noaccount: {
    fontFamily: "interregular",
    fontSize: 12,
    marginBottom: 20,
  },
  signuptxt: {
    fontSize: 12,
    color: "#198508",
    fontFamily: "interbold",
  },
  txthighlight: {
    fontSize: 12,
    color: "black",
    fontFamily: "interbold",
  },
});
export default VerifyemailScreen;
