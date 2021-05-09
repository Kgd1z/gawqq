import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MuteScreen() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image source={require("../assets/silence.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3de",
    alignItems: "center",
  },
});
