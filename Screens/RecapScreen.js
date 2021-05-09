import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Filtered from "../Components/Filtered";

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
            paddingTop: 25,
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
      <View style={{ width: 300, paddingTop: 35 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Filters</Text>
        <Text style={{ fontSize: 13, paddingTop: 10, paddingBottom: 15 }}>
          The main news feed will avoid:
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Filtered title="Non-news" />
          <Filtered title="Paid News" />
        </View>
        <View
          style={{
            height: 1,
            width: 330,
            backgroundColor: "grey",
            marginTop: 30,
            alignSelf: "center",
          }}
        ></View>
        <Text style={{ fontSize: 17, fontWeight: "bold", paddingTop: 20 }}>
          Following
        </Text>
        <Text style={{ fontSize: 13, paddingTop: 10, paddingBottom: 15 }}>
          Automatically tag fresh content related to:
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
