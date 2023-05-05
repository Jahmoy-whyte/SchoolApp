import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import Backbutton from "../../../components/Backbutton/Backbutton";
import { LineChart } from "react-native-chart-kit";
import { useWindowDimensions } from "react-native";

const AttendanceScreen = ({ navigation, route }) => {
  const { height, width } = useWindowDimensions();
  const data = {
    labels: ["Monday", "Tuesday", "w", "t", "f"],
    datasets: [
      {
        data: [1, 1, 1, 1, 0],
        color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [0, 0, 1, 1, 0],
        color: (opacity = 1) => `rgba(32,56, 89, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Attendance"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <>
      <View style={styles.backdrop}></View>
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.backbuttonview}>
          <Backbutton color="white" />
        </View>
        <LineChart
          data={data}
          width={width}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
        <ScrollView style={Globalstyles.scrollcontainer}>
          <Text style={styles.subheadingstxt}>Average:</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  headingtxt: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
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

  subheadingstxt: {
    marginTop: 15,
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "interbold",
  },
  txtlarge4: {
    fontSize: 12,
    color: "white",
    fontFamily: "interbold",
  },
});
export default AttendanceScreen;
