import React from "react";
import { Text, Pressable } from "react-native";

const DurationButtons = ({ selected, setSelected, durations }) => {
  return durations.map((duration, index) => {
    const isSelected = selected.duration === duration;

    return (
      <Pressable
        key={`duration-${index}`}
        onPress={() => setSelected({ ...selected, duration })}
        android_ripple={{ color: "grey" }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
          marginRight: 5,
          marginBottom: 5,
          padding: 7,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: "grey",
          backgroundColor: isSelected ? "#0a7a95" : "#fff",
          width: 70,
          minWidth: 55,
        }}
      >
        <Text
          style={{
            color: isSelected ? "#fff" : "#000",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {`${duration} min`}
        </Text>
      </Pressable>
    );
  });
};

export default DurationButtons;
