import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Button from "../../components/button/Button";
import { Globalstyles } from "../../assets/styles/Globalstyles";
import useOnboardingJS from "./useOnboardingJS";
const OnboardingScreen = () => {
  const [windowWidth, scroll, data, scrolldata, NextFN, index, nav] =
    useOnboardingJS();

  const List = ({ data }) => {
    return (
      <View style={[styles.liststyle, { width: windowWidth }]}>
        <Image source={data.image} resizeMode="contain" style={styles.img} />
        <Text style={Globalstyles.txtlarge2}>{data.title}</Text>
        <Text
          style={[
            Globalstyles.txtsmallgray1,
            { textAlign: "center", marginHorizontal: 20 },
          ]}
        >
          {data.subtitle}
        </Text>
      </View>
    );
  };
  // <Text style={styles.skipbtn}>Skip</Text>
  return (
    <SafeAreaView style={Globalstyles.container}>
      <TouchableOpacity onPress={() => nav.navigate("signup")}>
        <Text style={styles.skipbtn}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.Heading}>OHHS App</Text>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.FlatList}
        data={data}
        ref={scroll}
        onViewableItemsChanged={scrolldata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }, index) => {
          return <List data={item} key={index} />;
        }}
      />

      <View style={styles.indicatorscontainer}>
        <View
          style={[
            styles.indicators,
            { backgroundColor: index === 0 ? "#198508" : "#B3B3B3" },
          ]}
        ></View>
        <View
          style={[
            styles.indicators,
            { backgroundColor: index === 1 ? "#198508" : "#B3B3B3" },
          ]}
        ></View>
        <View
          style={[
            styles.indicators,
            { backgroundColor: index === 2 ? "#198508" : "#B3B3B3" },
          ]}
        ></View>
      </View>

      <Button
        text={index === 2 ? "Get Started" : "Next"}
        setmarginHorizontal={20}
        Function={() => NextFN()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  indicatorscontainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  indicators: {
    borderRadius: 6,
    backgroundColor: "blue",
    width: 20,
    height: 5,
  },
  skipbtn: {
    marginTop: 15,
    fontFamily: "interbold",
    fontSize: 14,
    color: "#B3B3B3",
    textAlign: "right",
    marginHorizontal: 20,
  },
  Heading: {
    textAlign: "center",
    fontFamily: "interbold",
    fontSize: 20,
  },

  liststyle: {
    backgroundColor: "white",

    alignItems: "center",
  },

  FlatList: {
    flex: 1,
  },
  img: {
    width: 180,
    height: 180,
    marginVertical: 15,
  },
});
export default OnboardingScreen;
