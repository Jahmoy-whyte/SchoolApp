import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
const LoadingScreen = () => {
  return (
    <View style={styles.load}>
      <ActivityIndicator size={"large"} color={"black"} />
    </View>
  );
};
const styles = StyleSheet.create({
  load: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LoadingScreen;
