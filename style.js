import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#3a3c3f"
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Muli-Black"
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bodyText: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 10
  },
  bodyTextInfo: {
    width: "80%",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 5
  },
  bodyBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f46e42",
    marginTop: 80,
    paddingTop: 10,
    paddingBottom: 10,
    width: "80%",
    borderRadius: 10
  },
  btnText: {
    color: "#fff",
    fontSize: 22
  },
  footer: {
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 10
  }
});
