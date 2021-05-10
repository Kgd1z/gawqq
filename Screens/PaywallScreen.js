import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Option from "../Components/Option";
import { useNavigation } from "@react-navigation/native";
export default function PaywallScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center", width: 300 }}>
        <Image
          style={{ width: 128, height: 128 }}
          source={require("../assets/dollar.png")}
        />
        <Text style={{ fontWeight: "bold", paddingTop: 30, fontSize: 25 }}>
          Avoid Paywalls
        </Text>
        <Text
          style={{
            paddingTop: 30,
            fontSize: 15,
            textAlign: "center",
            paddingBottom: 50,
          }}
        >
          Gawq is free and we dont meter access,but some media companies do
        </Text>
      </View>
      <Option title="Media sources with paywalls" />
      <View style={{ flexDirection: "row", width: 300 }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/exclamation.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 5,
            textAlign: "center",
            justifyContent: "center",
            fontSize: 15,
          }}
        >
          Notice
        </Text>
      </View>
      <View style={{ width: 280 }}>
        <Text style={{ lineHeight: 20, paddingTop: 10 }}>
          Turning this off will hide all content from companies that sell
          subscriptions ,like the NY times or wallstreet journal.Many of the
          allow some access for free so we recommend keeping this enabled.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: "#ffc62b",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          marginTop: 100,
        }}
        onPress={() => navigation.navigate("PaywallScreen")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
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
