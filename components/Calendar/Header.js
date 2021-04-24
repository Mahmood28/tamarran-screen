import React from "react";
import moment from "moment";
// Styling
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "./styles";

const Header = ({ selected, setSelected, upcomingDates }) => {
  const dateCards = upcomingDates.map((date, index) => {
    const isSelected =
      moment(selected.date).format("MM-DD-YYYY") === date.format("MM-DD-YYYY");
    return (
      <Pressable
        key={`date-${index}`}
        onPress={() => setSelected({ ...selected, date: new Date(date) })}
        android_ripple={{ color: "grey" }}
        style={[
          styles.card,
          { backgroundColor: isSelected ? "#fff" : "#279f27" },
        ]}
      >
        <Text
          style={{
            color: isSelected ? "#279f27" : "#fff",
            fontSize: 14,
            marginBottom: 5,
          }}
        >
          {String(date).slice(0, 2)}
        </Text>
        <Text style={{ color: isSelected ? "#279f27" : "#fff", fontSize: 18 }}>
          {date.format("D")}
        </Text>
      </Pressable>
    );
  });

  return (
    <View
      style={[
        styles.header,
        { height: 90, paddingHorizontal: 10, marginTop: 0, paddingTop: 0 },
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <View style={[styles.seperator, { borderBottomColor: "#fff" }]} />
        <ScrollView
          style={styles.options}
          horizontal={true}
          showsHorizontalScrollIndicator
        >
          {dateCards}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;
