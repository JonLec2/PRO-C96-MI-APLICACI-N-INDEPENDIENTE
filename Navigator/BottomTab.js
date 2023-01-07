import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Text, View } from "react-native";
import Home from "../Screens/Menu";
import Profile from "../Screens/Profile";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconname;
          if (route.name === "Home") {
            iconname = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Profile") {
            iconname = focused ? "person-sharp" : "person-outline";
          }

          return (
            <Ionicons name={iconname} size={RFValue(25)} color={color} style={styles.icons}></Ionicons>
          );
        },
        //tabBarActiveTintColor: "tomato",
        //tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
      })}
      activeColor={"#000"}
      inactiveColor={"#fff"}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#3dccc7",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTab;
