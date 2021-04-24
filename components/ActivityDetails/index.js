import React, { useRef, useState } from "react";
// Data
import data from "./data";
// Components
import Header from "./Header";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import UpperStickyButton from "../buttons/UpperStickyButton";
import LowerStickyButton from "../buttons/LowerStickyButton";
// Styling
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  Pressable,
} from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("screen");

const ActivityDetails = ({ navigation }) => {
  const [bottomActions, setBottomActions] = useState(null);
  const [image, setImage] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const topEdge = bottomActions?.y - height + bottomActions?.height;
  const bottomEdge = bottomActions?.y + bottomActions?.height;
  const imageBottom = image?.y + image?.height - 60;

  const activityImages = data.images.map((image, index) => (
    <Image
      key={`image-${index}`}
      style={{
        height: height * 0.6,
        width,
        margin: 0,
        resizeMode: "cover",
      }}
      source={{
        uri: image,
      }}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        style={styles.container}
      >
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator
          onLayout={(event) => {
            setImage(event.nativeEvent.layout);
          }}
        >
          {activityImages}
        </ScrollView>
        <TopSection />
        <View
          style={[styles.details, { height: 60 }]}
          onLayout={(event) => {
            setBottomActions(event.nativeEvent.layout);
          }}
        >
          <Pressable
            android_ripple={{ color: "grey" }}
            onPress={() => navigation.navigate("Calendar")}
            style={styles.bookingButton}
          >
            <Text
              style={{ color: "#279f27", fontSize: 16, fontWeight: "bold" }}
            >
              BOOK NOW
            </Text>
          </Pressable>
        </View>
        <BottomSection />
      </Animated.ScrollView>
      {bottomActions && (
        <>
          <UpperStickyButton
            topEdge={topEdge}
            scrollY={scrollY}
            navigation={navigation}
          />
          <LowerStickyButton
            bottomEdge={bottomEdge}
            scrollY={scrollY}
            navigation={navigation}
          />
        </>
      )}
      {image && (
        <>
          <Header
            background={true}
            imageBottom={imageBottom}
            scrollY={scrollY}
          />
          <Header favourite={favourite} setFavourite={setFavourite} />
        </>
      )}
    </View>
  );
};

export default ActivityDetails;
