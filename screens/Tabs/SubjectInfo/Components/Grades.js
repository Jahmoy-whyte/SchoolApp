import { View, Text, StyleSheet } from "react-native";
import { Globalstyles } from "../../../../assets/styles/Globalstyles";

const Grades = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infotxt}>
        <Text style={Globalstyles.txtsmallbold1}>{data.Activity}</Text>
        <Text style={Globalstyles.txtsmallbold2}>
          Date:
          <Text style={Globalstyles.txtsmallgray2}>{" date"}</Text>
        </Text>

        <Text style={Globalstyles.txtsmallbold2}>
          Topics:
          <Text style={Globalstyles.txtsmallgray2}>{" topic"}</Text>
        </Text>
      </View>

      <View style={styles.percentview}>
        <Text style={styles.percenttxt}>{data.Grade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 15,
    flexDirection: "row",
    flex: 1,
  },
  infotxt: {
    flex: 1,
  },
  percentview: {
    alignItems: "center",
    justifyContent: "center",
  },
  percenttxt: {
    color: "#198508",
    fontFamily: "interbold",
    fontSize: 14,
  },
});

export default Grades;
