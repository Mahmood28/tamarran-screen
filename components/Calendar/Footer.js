import React from "react";
import { View, Text, Pressable, Alert } from "react-native";

const Footer = ({ duration }) => {
  return (
    <View
      style={{
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#ff4500",
            fontSize: 22,
            fontWeight: "bold",
            alignSelf: "flex-end",
          }}
        >
          {`BHD ${(duration / 3).toFixed(3)}`}
        </Text>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => Alert.alert("Booking Page")}
          style={{
            minWidth: 150,
            backgroundColor: "#0a7a95",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 65,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            NEXT
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;
