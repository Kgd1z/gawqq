import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "trirong-regular": require("./assets/fonts/Trirong-Regular.ttf"),
    "trirong-bold": require("./assets/fonts/Trirong-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <HomeScreen /> */}
          <SignUpScreen />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3de",
    alignItems: "center",
  },
});
