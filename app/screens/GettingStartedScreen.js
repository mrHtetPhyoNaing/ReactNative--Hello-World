import React from "react";
import {
  Image,
  Text,
  ImageBackground,
  ImageComponent,
  StyleSheet,
  View,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../config/colors";

function GettingStartedScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/gettingStartedLogo.png")}
      />
      <Text style={styles.headingOne}>Getting Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 400,
    height: 300,
  },
  getStarted: {
    top: 20,
    marginTop: 100,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  getStartedText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  headingOne: {
    fontSize: 30,
    top: 15,
    fontWeight: "bold",
    fontStyle: "normal",
  },
});

export default GettingStartedScreen;
