import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  options: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  container: { padding: 20, marginTop: 90, backgroundColor: "#fff" },
  heading: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 60,
    marginTop: 12,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    minWidth: 45,
    justifyContent: "center",
    height: 60,
  },
  seperator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    height: 60,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#279f27",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default styles;
