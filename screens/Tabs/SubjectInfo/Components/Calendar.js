import { View, Text, StyleSheet, FlatList } from "react-native";
import { GetDaysInMonth } from "../helper/Getmonthsandweeks";

const Calendar = () => {
  const arr = Array.from({ length: GetDaysInMonth() }, () => {
    return "1";
  });
  const Dayscard = ({ d }) => {
    return (
      <View style={styles.numberdays}>
        <Text style={styles.numberdaystxt}>{d}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.dayheading}>
        <Text style={styles.dayheadingtxt}>S</Text>
        <Text style={styles.dayheadingtxt}>M</Text>
        <Text style={styles.dayheadingtxt}>T</Text>
        <Text style={styles.dayheadingtxt}>W</Text>
        <Text style={styles.dayheadingtxt}>T</Text>
        <Text style={styles.dayheadingtxt}>F</Text>
        <Text style={styles.dayheadingtxt}>S</Text>
      </View>

      <FlatList
        data={arr}
        numColumns={7}
        renderItem={({ item, index }) => {
          return <Dayscard key={index} d={index + 1} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dayheading: {
    flexDirection: "row",
  },
  numberdays: {
    backgroundColor: "#198508",
    borderColor: "white",
    borderWidth: 0.5,
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dayheadingtxt: {
    fontFamily: "interbold",
    fontSize: 12,
    flex: 1,
    padding: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },

  numberdaystxt: {
    color: "white",
    fontFamily: "interregular",
    fontSize: 12,
  },
});

export default Calendar;
