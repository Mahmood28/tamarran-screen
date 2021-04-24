import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, Pressable, Platform, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
// Data
import data from "../ActivityDetails/data";
// Components
import Header from "./Header";
import Footer from "./Footer";
import TimeButtons from "./TimeButtons";
import DurationButtons from "./DurationButtons";
// Styling
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

let upcomingDates = [];
for (let i = 0; i < 14; i++) upcomingDates.push(moment().add(i, "days"));

const times = [];
for (let i = 0; i < 20; i++)
  times.push(
    moment("11:00", "HH:mm")
      .add(i * 30, "minutes")
      .format("HH:mm")
  );

const durations = [60, 90, 120];

const Calendar = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: (
        <View style={{ width: 220, height: 60 }}>
          <Text style={styles.heading}>{data.title}</Text>
          <Text style={[styles.text, { fontSize: 18, opacity: 0.7 }]}>
            {moment(selected.date).format("DD MMM YYYY")}
          </Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#279f27",
        height: 60,
      },
      headerTintColor: "#fff",
      headerRight: () => (
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={() => setShow(true)}
          style={{ marginRight: 10 }}
        >
          <Icon
            type="AntDesign"
            style={{ color: "white" }}
            name="calendar"
            size={20}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({
    time: "",
    date: new Date(),
    duration: 60,
  });

  useEffect(() => {
    navigation.setOptions({
      title: (
        <View style={{ width: 220, height: 60 }}>
          <Text style={styles.heading}>{data.title}</Text>
          <Text style={[styles.text, { fontSize: 18, opacity: 0.7 }]}>
            {moment(selected.date).format("DD MMM YYYY")}
          </Text>
        </View>
      ),
    });
  }, [selected.date]);

  const updateDates = (date) => {
    upcomingDates = [];
    for (let i = 0; i < 14; i++)
      upcomingDates.push(moment(date).add(i, "days"));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || selected.date;
    if (currentDate > upcomingDates[upcomingDates.length - 1])
      updateDates(currentDate);
    setShow(Platform.OS === "ios");
    setSelected({ ...selected, date: currentDate });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selected.date}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.subheading}>Option</Text>
        <View style={styles.options}>
          <DurationButtons
            selected={selected}
            setSelected={setSelected}
            durations={durations}
          />
        </View>
        <Text style={styles.subheading}>Option</Text>
        <View style={styles.options}>
          <TimeButtons
            selected={selected}
            setSelected={setSelected}
            times={times}
          />
        </View>
      </ScrollView>
      <Header
        selected={selected}
        upcomingDates={upcomingDates}
        setSelected={setSelected}
      />
      <Footer duration={selected.duration} />
    </View>
  );
};

export default Calendar;
