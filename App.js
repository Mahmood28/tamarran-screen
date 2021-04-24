import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Components
import ActivityDetails from "./components/ActivityDetails";
import Calendar from "./components/Calendar";
// Styling
import { StatusBar } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="ActivityDetails">
        <Screen
          name="ActivityDetails"
          component={ActivityDetails}
          options={{ headerShown: false }}
        />
        <Screen name="Calendar" component={Calendar} />
      </Navigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
}
