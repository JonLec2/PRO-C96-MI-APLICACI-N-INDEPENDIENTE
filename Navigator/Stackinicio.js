import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackSesion from "./Stacksesion";
import BottomTab from "./BottomTab";
import Cronometro1 from "../Screens/Cronometro1";

const Stack = createNativeStackNavigator();

const StackInicio = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sesion"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Sesion" component={StackSesion} />
      <Stack.Screen name="Feed" component={BottomTab} />
      <Stack.Screen name="Cronometro" component={Cronometro1} />


    </Stack.Navigator>
  );
};

export default StackInicio;

