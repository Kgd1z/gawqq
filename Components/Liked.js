import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Liked(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 150,

        marginRight: 35,
        marginVertical: 5,
      }}
    >
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../assets/heart.png")}
      />
      <Text style={{ fontWeight: "bold", paddingLeft: 7 }}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
