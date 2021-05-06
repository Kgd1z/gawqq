import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 80, alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontFamily: "trirong-bold" }}>
          Log in to Gawq
        </Text>
        <Text></Text>
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
