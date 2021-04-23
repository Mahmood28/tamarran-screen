import React from "react";
// Data
import data from "./data";
// Styling
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Octicons";

const stars = (rating) => {
  let array = [];
  for (let i = 0; i < rating; i++)
    array.push(
      <Icon
        name="star"
        size={20}
        key={`star-${i}`}
        style={{ marginRight: 3 }}
        color="white"
      />
    );
  return (
    <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
      {array}
    </View>
  );
};

const avaialbleDays = data.days.map((day, index) => (
  <View key={`day-${index}`} style={styles.day}>
    <Text style={[styles.text, { textAlign: "center" }]}>
      {day.slice(0, 3)}
    </Text>
  </View>
));

const TopSection = () => {
  return (
    <View style={styles.details}>
      <Text
        style={styles.activityTitle}
      >{`${data.organisation} ${data.title}`}</Text>
      {stars(data.rating)}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        <View
          style={[
            styles.day,
            { backgroundColor: "white", borderColor: "#a9a9a9" },
          ]}
        >
          <Text
            style={[
              styles.text,
              { textAlign: "center", color: "#279f27", fontWeight: "bold" },
            ]}
          >
            Batelco
          </Text>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Icon
          name="location"
          size={14}
          color="white"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.text}>{data.city}</Text>
      </View>
      <View style={[styles.seperator, { borderBottomColor: "white" }]} />
      <Text style={[styles.text, { marginBottom: 10 }]}>Working Days</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 50,
        }}
      >
        {avaialbleDays}
      </View>
    </View>
  );
};

export default TopSection;
