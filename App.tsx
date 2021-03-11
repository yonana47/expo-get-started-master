import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Top from "./pages/Top";
import Map from "./pages/Map";
import Detail from "./pages/Detail";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Top"} component={Top} />
        <Stack.Screen name={"Map"} component={Map} />
        <Stack.Screen name={"Detail"} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
