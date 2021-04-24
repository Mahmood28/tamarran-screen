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
        style={[
          styles.buttonGroup,
          { minWidth: 55, backgroundColor: isSelected ? "#0a7a95" : "#fff" },
        ]}
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
