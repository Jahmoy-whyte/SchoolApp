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
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import { MaterialIcons, AntDesign, Feather, Entypo } from "@expo/vector-icons";

import { memo } from "react";
import Backbutton from "../../../components/Backbutton/Backbutton";

import { useNavigation } from "@react-navigation/native";

const Posts = ({ route }) => {
  const { postdata } = route.params;
  const nav = useNavigation();
  // console.log(postdata.Image);
  return (
    <>
      <View style={styles.backdrop}></View>

      <SafeAreaView style={Globalstyles.container}>
        <View style={styles.headingview}>
          <Backbutton color="white" />
          <Text style={styles.heading}>Post</Text>
        </View>
        <View style={styles.maincontainer}>
          <TouchableOpacity
            style={styles.headingcontainer}
            onPress={() => nav.navigate("schoolinfo")}
          >
            <View style={styles.imageandtxtview}>
              <View style={styles.imageview}>
                <Image
                  source={require("../../../assets/cu_icon.png")}
                  style={styles.headingimg}
                />
              </View>
              <View style={styles.headingtxtview}>
                <Text style={styles.title}>{postdata?.From}</Text>
                <Text style={styles.subtitle}>{postdata?.Subtitle}</Text>
              </View>
            </View>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
          <View style={styles.imageandmessage}>
            <Text style={styles.message}>{postdata?.Message}</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: postdata?.Image,
              }}
              style={styles.postimg}
            />

            <View style={styles.likeview}>
              <Text style={Globalstyles.txtsmall1}>
                {postdata?.Likes} Likes
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <AntDesign name="like2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#198508",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  headingview: {
    backgroundColor: "#198508",
  },
  heading: {
    fontFamily: "interbold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  maincontainer: {
    backgroundColor: "white",

    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  headingcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",

    paddingBottom: 15,
    alignItems: "center",
  },
  imageandtxtview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  imageview: {
    borderRadius: 50,
  },
  headingtxtview: {
    flex: 1,
  },
  headingimg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    fontFamily: "interbold",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "interregular",
    fontSize: 14,
    color: "#B3B3B3",
  },
  imageandmessage: {
    paddingVertical: 10,
  },
  postimg: {
    width: "100%",
    height: 250,
    borderRadius: 6,
  },
  message: {
    fontFamily: "interregular",
    fontSize: 14,
    marginBottom: 5,
  },
  messagereadmore: {
    fontFamily: "interbold",
    fontSize: 14,
    color: "#198508",
  },
  likeview: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    paddingVertical: 5,
  },
});
export default Posts;
