import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Globalstyles } from "../../../assets/styles/Globalstyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import AccountScreen from "../Account/AccountScreen";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const MainTabsScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Account") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontFamily: "interregular",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#198508",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default MainTabsScreen;
