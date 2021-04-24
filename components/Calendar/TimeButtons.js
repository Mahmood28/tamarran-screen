import React from "react";
import { Text, Pressable } from "react-native";
import moment from "moment";
import styles from "./styles";

const TimeButtons = ({ selected, setSelected, times }) => {
  return times.map((time, index) => {
    const isSelected = selected.time === time;
    const passed =
      moment().add(3, "hours") >
      moment(selected.date)
        .hours(+time.slice(0, 2) + 3)
        .minutes(+time.slice(3));

    return (
      <Pressable
        key={`time-${index}`}
        disabled={passed}
        onPress={() => setSelected({ ...selected, time })}
        android_ripple={{ color: "grey" }}
        style={[
          styles.buttonGroup,
          {
            minWidth: 60,
            backgroundColor: isSelected ? "#0a7a95" : "#fff",
            opacity: passed ? 0.5 : 1,
          },
        ]}
      >
        <Text
          style={{
            color: isSelected ? "#fff" : "#000",
            fontSize: 14,
            fontWeight: "bold",
            opacity: passed ? 0.5 : 1,
          }}
        >
          {time}
        </Text>
      </Pressable>
    );
  });
};

export default TimeButtons;
