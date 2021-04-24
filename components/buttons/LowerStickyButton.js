import React from "react";
// Styling
import { View, Text, Animated, Pressable } from "react-native";
import styles from "../ActivityDetails/styles";

const LowerStickyButton = ({ bottomEdge, scrollY, navigation }) => {
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
              inputRange: [
                bottomEdge - 2,
                bottomEdge - 1,
                bottomEdge,
                bottomEdge + 1,
                bottomEdge + 2,
              ],
              outputRange: [2, 1, 0, 0, 0],
            }),
          },
        ],
      }}
    >
      <View style={[styles.details, { backgroundColor: "white" }]}>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => navigation.navigate("Calendar")}
          style={styles.bottomBookingButton}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            BOOK NOW
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default LowerStickyButton;
