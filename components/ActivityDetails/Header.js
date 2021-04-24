import React from "react";
// Styling
import { View, Animated, Share, Alert, Pressable } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";

const Header = ({
  favourite,
  setFavourite,
  imageBottom,
  scrollY,
  background,
}) => {
  return (
    <Animated.View
      style={
        background
          ? [
              styles.header,
              {
                opacity: scrollY.interpolate({
                  inputRange: [
                    imageBottom - 2,
                    imageBottom - 1,
                    imageBottom,
                    imageBottom + 1,
                    imageBottom + 2,
                  ],
                  outputRange: [0, 0, 0, 1, 1],
                }),
              },
            ]
          : styles.headerTransparent
      }
    >
      {!background && (
        <>
          <View>
            <Pressable
              android_ripple={{ color: "grey" }}
              onPress={() => Alert.alert("Previous Page")}
            >
              <Icon name="arrow-left" size={22} color="white" />
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Pressable onPress={() => setFavourite(!favourite)}>
              <Icon
                name={favourite ? "heart" : "heart-outlined"}
                size={22}
                color={favourite ? "red" : "white"}
                style={{ marginRight: 25 }}
              />
            </Pressable>
            <Pressable
              android_ripple={{ color: "grey" }}
              onPress={() =>
                Share.share({
                  message: "Activity Title http://app.tamarran.com/info/bh4296",
                  title: "Activity Category",
                })
              }
            >
              <Icon name="share" size={22} color="white" />
            </Pressable>
          </View>
        </>
      )}
    </Animated.View>
  );
};

export default Header;
