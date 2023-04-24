import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Globalstyles } from "../../assets/styles/Globalstyles";
import Button from "../../components/button/Button";
import Backbutton from "../../components/Backbutton/Backbutton";
import useResetpasswordJS from "./Hooks/useResetpasswordJS";
const Resetpasswordscreen = () => {
  const [textbox, settextbox, FN_resetpassword] = useResetpasswordJS();
  return (
    <SafeAreaView style={Globalstyles.container}>
      <Backbutton disable={textbox.loading} />
      <ScrollView style={Globalstyles.scrollcontainer}>
        <View style={styles.imgcontainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/images/password.png")}
          />
        </View>
        <Text style={styles.txtlarge1}>Reset Password</Text>
        <Text style={styles.txtsmallgray1}>
          Enter your email below after tap send you will receive a link in your
          email open link to reset password
        </Text>

        <View style={styles.textboxandlabel}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter Your Email."
            onChangeText={(value) =>
              settextbox((prev) => ({ ...prev, email: value }))
            }
            value={textbox.email}
            keyboardType="email-address"
          />
        </View>

        <Button
          text={"Send"}
          loading={textbox.loading}
          Function={() => FN_resetpassword()}
          // loading={verifystate.loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 180,
  },
  txtlarge1: {
    marginTop: 15,
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

  textboxandlabel: {
    marginBottom: 15,
  },
  label: {
    fontFamily: "interregular",
    fontSize: 14,
  },
  textbox: {
    borderRadius: 6,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 5,
    fontSize: 12,
  },
});
export default Resetpasswordscreen;
