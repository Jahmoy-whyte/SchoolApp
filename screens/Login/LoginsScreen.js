import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../../components/button/Button";
import useLoginJS from "./Hooks/useLoginJS";
import { Globalstyles } from "../../assets/styles/Globalstyles";
/*
  <View style={styles.imgcontainer}>
          <Image
            style={styles.img}
            source={require("../../assets/images/schoollogo.png")}
          />

          <View>
            <Text style={styles.logintxt}>Login</Text>
            <Text style={styles.loginsubtxt}>Please Login To Continue</Text>
          </View>
        </View>

*/
const LoginScreen = () => {
  const [textbox, settextbox, nav, FN_Login] = useLoginJS();
  return (
    <SafeAreaView style={Globalstyles.container}>
      <ScrollView style={Globalstyles.scrollcontainer}>
        <View style={styles.imgcontainer}>
          <View>
            <Text style={Globalstyles.txtlarge1}>Login</Text>
            <Text style={styles.loginsubtxt}>Please Login To Continue</Text>
          </View>
        </View>

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

        <View style={styles.textboxandlabel}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter Your Password."
            onChangeText={(value) =>
              settextbox((prev) => ({ ...prev, password: value }))
            }
            value={textbox.password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => nav.navigate("resetpassword")}>
          <Text style={styles.forgotpass}> Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          text={"Login"}
          Function={() => FN_Login()}
          loading={textbox.loading}
        />

        <TouchableOpacity
          disabled={textbox.loading}
          onPress={() => nav.goBack()}
        >
          <Text style={styles.noaccount}>
            Dont have an account? <Text style={styles.signuptxt}> SignUp</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {},
      android: { marginTop: StatusBar.currentHeight },
    }),

    flex: 1,
  },

  imgcontainer: {
    gap: 5,
    alignItems: "center",
    marginBottom: 15,
    flex: 1,
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
  },
  logincontainer: {
    flex: 1,
    paddingHorizontal: 20,

    backgroundColor: "white",
  },

  logintxt: {
    fontFamily: "interbold",
    fontSize: 20,
  },
  loginsubtxt: {
    color: "#B3B3B3",
    fontSize: 14,
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
  forgotpass: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "interregular",
    color: "#198508",
    marginBottom: 15,
  },
  noaccount: {
    fontFamily: "interregular",
    fontSize: 14,
    marginBottom: 20,
  },
  signuptxt: {
    fontSize: 14,
    color: "#198508",
    fontFamily: "interbold",
  },
  d: {},
  d: {},
  d: {},
  d: {},
});
