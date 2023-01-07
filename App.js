import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackInicio from "./Navigator/Stackinicio";

const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Appscreens"
          component={StackInicio}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
