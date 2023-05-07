import Toast from "react-native-toast-message";

const Alertshow = (text = "error", type = "cs_error") => {
  Toast.show({
    type: type,
    text1: text,
    text2: "This is some something 👋",
  });
};
export default Alertshow;
