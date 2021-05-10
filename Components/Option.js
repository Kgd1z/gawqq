import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Option(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <View style={{ width: 200 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 7 }}>
          {props.title}
        </Text>
        <Text style={{}}>{props.description}</Text>
      </View>
      <View
        style={{ justifyContent: "center", marginLeft: 40, marginRight: 30 }}
      >
        <Image
          style={{
            position: "absolute",
            zIndex: 1,
            left: 33,
            width: 25,
            height: 25,
          }}
          source={require("../assets/checked.png")}
        />
        <View
          style={{
            height: 4,
            width: 30,
            backgroundColor: "#68a9c9",
            position: "relative",
            zIndex: -1,
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
