import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function RecapScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "right" }}>Exit</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 160, height: 160, marginTop: 40 }}
          source={require("../assets/idea.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            paddingTop: 20,
            fontSize: 22,
            textAlign: "center",
          }}
        >
          Recap
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          You can change these later
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
