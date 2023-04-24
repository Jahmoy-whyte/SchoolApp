import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";

import { Globalstyles } from "../../../assets/styles/Globalstyles";
import { useEffect } from "react";
import Calendar from "./Components/Calendar";
import Backbutton from "../../../components/Backbutton/Backbutton";
import { Getmonths } from "./helper/Getmonthsandweeks";

import useSubjectdata from "./Hooks/useSubjectdata";
import LoadingScreen from "../../Loading/LoadingScreen";
import Grades from "./Components/Grades";

const SubjectInfoScreen = ({ navigation, route }) => {
  const { studentid, Subject, docid, TeacherDocid } = route.params;
  const [data] = useSubjectdata({ ...route.params });
  return (
    <>
      <View style={styles.backdrop}></View>
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.backbuttonview}>
          <Backbutton color="white" />
        </View>

        {data?.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={Globalstyles.scrollcontainer}>
            <Text style={styles.headingtxt}>{Subject}</Text>

            <Text style={styles.subheadingstxt}>Grades:</Text>

            {data.data.length < 1 ? (
              <View style={styles.nogrades}>
                <Text style={Globalstyles.txtsmall1}>No Grades Posted</Text>
              </View>
            ) : (
              data.data.map((data) => {
                return <Grades data={data} key={data.docid} />;
              })
            )}
            <Text style={styles.subheadingstxt}>Average:</Text>

            <View style={styles.avgstyle}>
              <Text style={styles.txtlarge4}>Average:</Text>

              <Text style={styles.txtlarge4}>90%</Text>
            </View>

            <Text style={styles.subheadingstxt}>Attendance:</Text>
            <View style={styles.monthstyle}>
              <Text style={Globalstyles.txtsmall2}>{Getmonths()}</Text>
            </View>

            <Calendar />
            <View style={styles.formargin}></View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  headingtxt: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
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

  avgstyle: {
    backgroundColor: "#198508",
    justifyContent: "space-between",
    flex: 1,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: 15,
  },
  subheadingstxt: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: "interbold",
  },
  txtlarge4: {
    fontSize: 12,
    color: "white",
    fontFamily: "interbold",
  },

  monthstyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "black",
    padding: 5,
    flexDirection: "row",

    flexWrap: "wrap",
  },

  formargin: {
    marginBottom: 15,
  },

  nogrades: {
    backgroundColor: "#B3B3B3",
    padding: 15,
    borderRadius: 6,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SubjectInfoScreen;
