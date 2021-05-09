import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Filtered(props) {
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Image
        style={{ width: 19, height: 19 }}
        source={require("../assets/block.png")}
      />
      <Text
        style={{
          paddingLeft: 4,
          paddingRight: 30,
          fontSize: 13,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
