import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from "./styles";

const Footer = ({ duration }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
        <Text style={styles.priceTag}>
          {`BHD ${(duration / 3).toFixed(3)}`}
        </Text>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => Alert.alert("Booking Page")}
          style={styles.bookingButton}
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
