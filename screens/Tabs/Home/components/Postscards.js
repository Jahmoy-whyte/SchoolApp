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
import { MaterialIcons, AntDesign, Feather, Entypo } from "@expo/vector-icons";

import { memo } from "react";

const Postcards = ({ postdata, nav }) => {
  // console.log(postdata.Image);
  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity
        style={styles.headingcontainer}
        onPress={() => nav.navigate("schoolinfo")}
      >
        <View style={styles.imageandtxtview}>
          <View style={styles.imageview}>
            <Image
              source={require("../../../../assets/cu_icon.png")}
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
      <TouchableOpacity
        style={styles.imageandmessage}
        onPress={() =>
          nav.navigate("postinfo", {
            postdata: postdata,
          })
        }
      >
        <Text style={styles.message} numberOfLines={2}>
          {postdata?.Message}
          <Text style={styles.messagereadmore}> Read More</Text>
        </Text>
        <Image
          resizeMode="cover"
          source={{
            uri: postdata?.Image,
          }}
          style={styles.postimg}
        />

        <View style={styles.likeview}>
          <Text style={Globalstyles.txtsmall1}>{postdata?.Likes} Likes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="like2" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    marginTop: 15,
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
export default Postcards;
