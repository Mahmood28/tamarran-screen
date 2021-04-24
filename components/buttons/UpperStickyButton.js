import React from "react";
// Styling
import { View, Text, Animated, Pressable } from "react-native";
import styles from "../ActivityDetails/styles";

const UpperStickyButton = ({ topEdge, scrollY, navigation }) => {
  return (
    <Animated.View
      style={{
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
              outputRange: [0, 0, 0, 0, -1],
            }),
          },
        ],
      }}
    >
      <View style={styles.details}>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => navigation.navigate("Calendar")}
          style={styles.bookingButton}
        >
          <Text style={{ color: "#279f27", fontSize: 16, fontWeight: "bold" }}>
            BOOK NOW
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default UpperStickyButton;
