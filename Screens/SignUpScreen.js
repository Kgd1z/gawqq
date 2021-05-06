import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", left: 190 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "#494d4f",
            left: 90,
          }}
        >
          Skip
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,

          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "trirong-bold",
            fontSize: 40,
            color: "#494d4f",
            textAlign: "center",
          }}
        >
          Gawq
        </Text>
        <Text
          style={{
            fontFamily: "trirong-bold",
            fontSize: 40,
            color: "#f2be3c",
          }}
        >
          .
        </Text>
      </View>
      <View>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../assets/phone.png")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{ fontWeight: "bold", color: "#494d4f", paddingBottom: 2 }}
        >
          Read beyond the headlines
        </Text>
        <Text style={{ color: "#494d4f" }}>360 coverage on today's news</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        <Image
          style={{ marginRight: 8 }}
          source={require("../assets/facebook.png")}
        />
        <Image
          style={{ width: 46, height: 46, marginRight: 8 }}
          source={require("../assets/google.png")}
        />
        <Image style={{}} source={require("../assets/facebook.png")} />
      </View>
      <View style={{ display: "flex", flexDirection: "row", width: 330 }}>
        <View
          style={{
            backgroundColor: "#494d4f",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 20,
            fontSize: 14,
            color: "#494d4f",
          }}
        >
          OR
        </Text>
        <View
          style={{
            backgroundColor: "#494d4f",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EmailSignUp");
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#494d4f",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            height: 45,
            width: 330,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#494d4f" }}>
            Sign up with email
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 90,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Existing Account?</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("LogInScreen")}
        >
          Log In
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
