import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Option from "../Components/Option";
import { useNavigation } from "@react-navigation/native";
export default function MuteScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center", width: 300 }}>
        <Image source={require("../assets/silence.png")} />
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
      <View style={{}}>
        <Option
          title="Options"
          description="Stories centered around an opinion or perspective."
        />
        <Option
          title="Non-news"
          description="How-to articles,list and general profile pieces."
        />
        <Option
          title="Paid news"
          description="Content paid for by a media sources sponsor."
        />
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: "#ffc62b",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          marginTop: 40,
        }}
        onPress={() => navigation.navigate("PaywallScreen")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Continue</Text>
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
