import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Globalstyles } from "../../../../assets/styles/Globalstyles";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { memo } from "react";

const Menu = ({ data, nav }) => {
  //console.log(data);
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headermenu}>
        <View style={styles.headericonview}>
          <Feather name="book-open" size={20} color="white" />
        </View>
        <Text style={Globalstyles.txtlarge3}>Menu</Text>
      </View>

      <View style={styles.menuoptionscontiner}>
        <View style={styles.menuoptions}>
          {data.profileinfo.map((item) => {
            return (
              <TouchableOpacity
                style={styles.menucards}
                key={item.docid}
                onPress={() =>
                  nav.navigate("profile", {
                    grade: item.FormGrade,
                    name: item.Firstname + " " + item.Lastname,
                    image: item.image,
                    studentid: item.docid,
                  })
                }
              >
                <View style={styles.iconandtxt}>
                  <AntDesign name="user" size={24} color="#B3B3B3" />

                  <View style={styles.menucardstxtview}>
                    <Text style={Globalstyles.txtsmallbold1}>
                      {item.Firstname + " " + item.Lastname}
                    </Text>
                    <Text style={Globalstyles.txtsmallgray2}>
                      Grade: {item.FormGrade}
                    </Text>
                  </View>
                </View>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#198508"
                />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={styles.menucards}
            onPress={() => nav.navigate("calender")}
          >
            <View style={styles.iconandtxt}>
              <AntDesign name="calendar" size={24} color="#B3B3B3" />

              <View style={styles.menucardstxtview}>
                <Text style={Globalstyles.txtsmallbold1}>Events</Text>
                <Text style={Globalstyles.txtsmallgray2}>Up Comming</Text>
              </View>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#198508"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    flex: 1,
    height: 5,
  },
  iconandtxt: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    flex: 1,
  },
  maincontainer: {
    backgroundColor: "white",
    marginTop: 15,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "space-between",
  },

  headermenu: {
    flexDirection: "row",
    alignItems: "center",

    gap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",

    paddingBottom: 10,
  },
  headericonview: {
    backgroundColor: "#198508",
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  menucards: {
    //   borderRadius: 6,
    //  borderWidth: 0.5,
    // borderColor: "#B3B3B3",
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#B3B3B3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  menuoptionscontiner: {
    marginTop: 10,
    // justifyContent: "center",
    //   alignItems: "center",
  },
  menuoptions: {
    //  alignItems: "center",
    flex: 0,
    flexDirection: "column",
    // flexWrap: "wrap",
    gap: 10,
  },

  menucardstxtview: {
    flex: 1,
  },
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
  b: {},
});
export default Menu;
