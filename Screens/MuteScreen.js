import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MuteScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center", width: 300 }}>
        <Image source={require("../assets/silence.png")} />
        <Text style={{ fontWeight: "bold", paddingTop: 30, fontSize: 25 }}>
          Mute the noise
        </Text>
        <Text style={{ paddingTop: 30, fontSize: 15, textAlign: "center" }}>
          Turn off the types of news and content you dont want appearing in your
          feed.
        </Text>
      </View>
      <View></View>
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
