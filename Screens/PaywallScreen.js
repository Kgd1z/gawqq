import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PaywallScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center", width: 300 }}>
        <Image
          style={{ width: 128, height: 128 }}
          source={require("../assets/dollar.png")}
        />
        <Text style={{ fontWeight: "bold", paddingTop: 30, fontSize: 25 }}>
          Mute the noise
        </Text>
        <Text
          style={{
            paddingTop: 30,
            fontSize: 15,
            textAlign: "center",
            paddingBottom: 50,
          }}
        >
          Turn off the types of news and content you dont want appearing in your
          feed.
        </Text>
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
