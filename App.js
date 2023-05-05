import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { userinfo_context, loginstate_context } from "./context/GBContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useContext, useState } from "react";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

import { toastConfig } from "./helper/CustomToast/CustomToast";

import SignupScreen from "./screens/Signup/SignupScreen";
import LoginScreen from "./screens/Login/LoginsScreen";
import VerifyemailScreen from "./screens/Verify/VerifyemailScreen";
import Resetpasswordscreen from "./screens/ResetPassword/Resetpasswordscreen";
import LoadingScreen from "./screens/Loading/LoadingScreen";
import MainTabsScreen from "./screens/Tabs/MainTabs/MainTabsScreen";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import { FireAuth } from "./FirebaseConfig";
import ProfileInfoScreen from "./screens/Tabs/ProfileInfo/ProfileInfoScreen";
import SubjectInfoScreen from "./screens/Tabs/SubjectInfo/SubjectInfoScreen";
import NewsScreen from "./screens/Tabs/News/NewsScreen";
import AttendanceScreen from "./screens/Tabs/Attendance/AttendanceSrceen";
import NotificationScreen from "./screens/Tabs/Notification/NotificationScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [login, setlogin] = useState();
  const [userifno, setuserifno] = useState();

  const [fontsLoaded] = useFonts({
    interbold: require("./assets/fonts/Inter-Bold.ttf"),
    interregular: require("./assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) return;
    onAuthStateChanged(FireAuth, (user) => {
      if (user && user.emailVerified === true) {
        setlogin("loggedin");
      } else {
        setlogin("loggedout");
      }
    });
  }, [fontsLoaded]);

  return (
    <>
      <StatusBar style="dark" />
      <loginstate_context.Provider value={[login, setlogin]}>
        <userinfo_context.Provider value={[userifno, setuserifno]}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                //  contentStyle:{
                // backgroundColor:"#61ADFF",

                //  }
              }}
            >
              {login === "loggedin" ? (
                <Stack.Group>
                  <Stack.Screen name="tabs" component={MainTabsScreen} />
                  <Stack.Screen name="profile" component={ProfileInfoScreen} />
                  <Stack.Screen name="subject" component={SubjectInfoScreen} />
                  <Stack.Screen name="News" component={NewsScreen} />
                  <Stack.Screen name="attend" component={AttendanceScreen} />
                  <Stack.Screen
                    name="notifications"
                    component={NotificationScreen}
                  />
                </Stack.Group>
              ) : login === "loggedout" ? (
                <Stack.Group>
                  <Stack.Screen name="oboarding" component={OnboardingScreen} />
                  <Stack.Screen name="signup" component={SignupScreen} />
                  <Stack.Screen name="verify" component={VerifyemailScreen} />
                  <Stack.Screen name="login" component={LoginScreen} />
                  <Stack.Screen
                    name="resetpassword"
                    component={Resetpasswordscreen}
                  />
                </Stack.Group>
              ) : (
                <Stack.Group>
                  <Stack.Screen name="loading" component={LoadingScreen} />
                </Stack.Group>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </userinfo_context.Provider>
      </loginstate_context.Provider>
      <Toast config={toastConfig} />
    </>
  );
}
