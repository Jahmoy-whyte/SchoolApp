import { StyleSheet, Platform, StatusBar } from "react-native";

export const Globalstyles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {},
      android: { marginTop: StatusBar.currentHeight },
    }),
    backgroundColor: "white",

    flex: 1,
    // height: 390,
  },

  txtlarge1: {
    fontFamily: "interbold",
    fontSize: 20,
  },

  txtlarge2: {
    fontSize: 18,
    fontFamily: "interbold",
  },

  txtlarge3: {
    fontSize: 16,
    fontFamily: "interbold",
  },

  txtlarge4: {
    fontSize: 14,
    fontFamily: "interbold",
  },

  txtsmall1: {
    fontSize: 14,
    fontFamily: "interregular",
  },

  txtsmall2: {
    fontSize: 12,
    fontFamily: "interregular",
  },

  txtsmallbold1: {
    fontSize: 14,
    fontFamily: "interbold",
  },

  txtsmallbold2: {
    fontSize: 12,
    fontFamily: "interbold",
  },

  txtsmallgray1: {
    color: "#B3B3B3",
    fontSize: 14,
    fontFamily: "interregular",
  },

  txtsmallgray2: {
    color: "#B3B3B3",
    fontSize: 12,
    fontFamily: "interregular",
  },

  scrollcontainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
  },
});
