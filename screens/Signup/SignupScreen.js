import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Globalstyles } from "../../assets/styles/Globalstyles";
import Button from "../../components/button/Button";
import Alertshow from "../../helper/Alerts/Alertshow";
import Checkbox from "expo-checkbox";
import useSignupJS from "./hooks/useSignupJS";
const SignupScreen = () => {
  const [textbox, settextbox, nav, FN_createAccount, loading] = useSignupJS();
  return (
    <SafeAreaView style={Globalstyles.container}>
      <ScrollView style={Globalstyles.scrollcontainer}>
        <Text style={Globalstyles.txtlarge1}>SignUp</Text>
        <Text style={styles.loginsubtxt}>Please Login To Continue</Text>

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
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter Your Phonenumber."
            onChangeText={(value) =>
              settextbox((prev) => ({ ...prev, phone: value }))
            }
            value={textbox.phone}
            keyboardType="number-pad"
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

        <View style={styles.checkboxandtxt}>
          <Checkbox
            onValueChange={() =>
              settextbox((prev) => ({ ...prev, checkbox: !textbox.checkbox }))
            }
            color={textbox.checkbox ? "#198508" : undefined}
            value={textbox.checkbox}
          />
          <Text style={styles.checkboxtxt}>
            I Have Read And Agreed To Our
            <Text style={styles.checktxtbold}> Privacy Policy</Text>
          </Text>
        </View>

        <Button
          text={"Sign Up"}
          Function={() => FN_createAccount()}
          loading={loading}
        />

        <TouchableOpacity
          disabled={loading}
          onPress={() => nav.navigate("login")}
        >
          <Text style={styles.noaccount}>
            Have an account?
            <Text style={styles.signuptxt}> Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginsubtxt: {
    marginBottom: 15,
    fontFamily: "interregular",
    fontSize: 14,
    color: "#B3B3B3",
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
  txtsmallbold1: {
    fontSize: 14,
    fontFamily: "interbold",
  },
  checkboxandtxt: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",

    marginBottom: 15,
  },
  checkboxtxt: {
    fontSize: 12,
    fontFamily: "interregular",
    flex: 1,
  },
  checktxtbold: {
    fontFamily: "interbold",
    fontSize: 12,
    color: "#198508",
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
});

export default SignupScreen;
