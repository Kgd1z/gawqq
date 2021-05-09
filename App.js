import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EmailSignUp from "./Screens/EmailSignUp";
import LogInScreen from "./Screens/LogInScreen";
import NewsScreen from "./Screens/NewsScreen";
import MuteScreen from "./Screens/MuteScreen";
const Stack = createStackNavigator();
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
        {Platform.OS === "ios" && <StatusBar barStyle="auto" />}

        <NavigationContainer style={{}}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen name="MuteScreen" component={MuteScreen} />
          </Stack.Navigator>
        </NavigationContainer>

        {/* <HomeScreen /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3de",
  },
});
