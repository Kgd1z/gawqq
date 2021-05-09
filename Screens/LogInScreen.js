import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function LogInScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
        style={{
          alignSelf: "flex-start",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={require("../assets/back.png")}
        />
      </TouchableOpacity>
      <View style={{ paddingTop: 10, alignItems: "center", width: 300 }}>
        <Text style={{ fontSize: 25, fontFamily: "trirong-bold" }}>
          Log in to Gawq
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          Welcome back! Sign in using your social account or email to continue
        </Text>
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
      <View style={{ paddingTop: 60, width: 300 }}>
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>Your email</Text>
        <TextInput style={styles.textinput} />
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>Password</Text>
        <TextInput style={styles.textinput} />
      </View>
      <TouchableOpacity
        style={{
          width: 310,
          borderWidth: 1,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
          marginTop: 70,
          borderColor: "#a3a3a1",
          backgroundColor: "#e5e4d0",
        }}
        onPress={() => navigation.navigate("NewsScreen")}
      >
        <Text style={{ color: "#9b9b96", fontWeight: "bold", fontSize: 18 }}>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: "#357ea3",
            paddingTop: 20,
            textDecorationLine: "underline",
            fontWeight: "bold",
          }}
        >
          Forgot Password?
        </Text>
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
  textinput: {
    height: 45,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
