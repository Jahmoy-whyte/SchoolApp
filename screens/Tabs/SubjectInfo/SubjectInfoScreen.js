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
import CircularProgress from "react-native-circular-progress-indicator";

const SubjectInfoScreen = ({ navigation, route }) => {
  const { studentid, Subject, docid, TeacherDocid } = route.params;
  const [data, calulateavg] = useSubjectdata({ ...route.params });
  return (
    <>
      <View style={styles.backdrop}></View>
      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.backbuttonview}>
          <Backbutton color="white" />
          <Text style={styles.headingtxt}>{Subject}</Text>
        </View>

        {data?.loading === true ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={Globalstyles.scrollcontainer}>
            <Text style={styles.subheadingstxt}>Average:</Text>
            <View style={styles.averagehold}>
              <CircularProgress
                value={calulateavg}
                valueSuffix={"%"}
                progressValueFontSize={18}
                activeStrokeColor="#198508"
                inActiveStrokeColor="#B3B3B3"
              />
            </View>

            <Text style={styles.subheadingstxt2}>Grades:</Text>

            {data.data.length < 1 ? (
              <View style={styles.nogrades}>
                <Text style={Globalstyles.txtsmall1}>No Grades Posted</Text>
              </View>
            ) : (
              data.data.map((data) => {
                return <Grades data={data} key={data.docid} />;
              })
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  averagehold: {
    alignItems: "center",
    justifyContent: "center",
  },
  headingtxt: {
    fontFamily: "interbold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
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
    marginBottom: 5,
    fontFamily: "interbold",
  },

  subheadingstxt2: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "interbold",
    marginTop: 15,
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
