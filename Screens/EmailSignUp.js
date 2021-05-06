import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function EmailSignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            right: 120,
            marginTop: 20,
          }}
          source={require("../assets/back.png")}
        />
      </TouchableOpacity>
      <View style={{ paddingTop: 100, alignItems: "center", width: 310 }}>
        <Text
          style={{
            fontFamily: "trirong-bold",
            fontSize: 21,
            paddingBottom: 20,
          }}
        >
          Sign up with Email
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Your free account will let you save, follow, discuss & contribute to
          great content accross 150+ sources.
        </Text>
      </View>
      <View style={{ paddingTop: 60, width: 300 }}>
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>Your name</Text>
        <TextInput style={styles.textinput} />
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>Your email</Text>
        <TextInput style={styles.textinput} />
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>Password</Text>
        <TextInput style={styles.textinput} />
        <Text style={{ color: "#357ea3", fontWeight: "bold" }}>
          Confirm Password
        </Text>
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
      >
        <Text style={{ color: "#9b9b96", fontWeight: "bold", fontSize: 18 }}>
          Create an account
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