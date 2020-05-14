import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import splash from "./splash/00-Splash.png";

export default class Splash extends Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: "orange" }];
    const textStyles = {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    };
    return <Image source={splash} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
