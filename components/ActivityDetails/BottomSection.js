import React from "react";
// Data
import data from "./data";
// Styling
import { View, Text, Alert, Image, Linking, Pressable } from "react-native";
import styles from "./styles";
import Icons from "react-native-vector-icons/FontAwesome";

const BottomSection = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 20,
        marginTop: 30,
      }}
    >
      <Text style={{ fontSize: 16, color: "black" }}>{data.details}</Text>
      <View>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => Linking.openURL("whatsapp://send?phone=97336678922")}
          style={styles.helpButton}
        >
          <Icons size={27} name="comments" color="#1e90ff" />
          <Text style={{ color: "#1e90ff", fontSize: 16, marginLeft: 7 }}>
            NEED HELP?
          </Text>
        </Pressable>
      </View>
      <View style={styles.seperator} />
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
        Location
      </Text>
      <Text style={{ fontSize: 16 }}>{data.address}</Text>
      <Pressable
        android_ripple={{ color: "grey" }}
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&destination=${data.location.lat},${data.location.lng}`
          )
        }
      >
        <Image
          style={{ height: 500, width: "auto", margin: 5 }}
          source={require("../../assets/maps_screenshot.png")}
        />
      </Pressable>
      <View style={{ borderRadius: 12 }}>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => Alert.alert("Booking Page")}
          style={[styles.bottomBookingButton, { marginTop: 30 }]}
        >
          <Text style={{ color: "white", fontSize: 16 }}>BOOK NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomSection;
