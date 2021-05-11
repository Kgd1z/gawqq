import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Interest = (props) => {
  const { onPress = () => {} } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: props.selected ? "#000000" : "#c6c6c6",
        margin: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: props.selected ? "#000000" : "inherit",
      }}
    >
      <Text
        style={{
          color: props.selected ? "#ffffff" : "#000000",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default Interest;
