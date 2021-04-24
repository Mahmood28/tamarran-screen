import React from "react";
import { Text, Pressable } from "react-native";
import moment from "moment";

const TimeButtons = ({ selected, setSelected, times }) => {
  return times.map((time, index) => {
    const chosen = selected.time === time;
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
          backgroundColor: chosen ? "#0a7a95" : "#fff",
          width: 70,
          minWidth: 60,
          opacity: passed ? 0.5 : 1,
        }}
      >
        <Text
          style={{
            color: chosen ? "#fff" : "#000",
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
