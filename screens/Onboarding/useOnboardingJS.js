import { useCallback, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useOnboardingJS = () => {
  const nav = useNavigation();
  const scroll = useRef();
  const [index, setindex] = useState(0);
  const windowWidth = Dimensions.get("window").width;
  const data = [
    {
      id: "1",
      title: "Wellcome",
      subtitle: "Wellcome To The OHHS App.",
      image: require("../../assets/images/img1.png"),
    },
    {
      id: "2",
      title: "Attendance And Grades",
      subtitle:
        "Easily Login And Check On You child's Grades and Attendance Updated Daily.",
      image: require("../../assets/images/img2.png"),
    },
    {
      id: "3",
      title: "Ready",
      subtitle: "Tap Get Started To Sign Up / Login.",
      image: require("../../assets/images/img3.png"),
    },
  ];

  const scrolldata = useRef(({ viewableItems }) => {
    console.log(viewableItems[0].index);
    setindex(viewableItems[0].index);
  }).current;

  const NextFN = useCallback(() => {
    // if (index === 2) {
    nav.navigate("signup");
    //  return;
    //   }
    // scroll?.current?.scrollToIndex({
    //  animated: true,
    //  index: index < 2 ? index + 1 : index,
    // });
  }, [index]);

  return [windowWidth, scroll, data, scrolldata, NextFN, index, nav];
};

export default useOnboardingJS;
