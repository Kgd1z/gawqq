import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "trirong-bold",
            fontSize: 100,
            color: "#494d4f",
          }}
        >
          G
        </Text>
        <Text
          style={{
            fontFamily: "trirong-bold",
            fontSize: 100,
            color: "#f2be3c",
          }}
        >
          .
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
    justifyContent: "center",
  },
});
