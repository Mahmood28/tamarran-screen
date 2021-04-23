import React from "react";
// Components
import ActivityDetails from "./components/ActivityDetails.js/index.js";
// Styling
import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ActivityDetails />
      <StatusBar hidden />
    </View>
  );
}
