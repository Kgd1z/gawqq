import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function NewsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ width: 260, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            paddingTop: 150,
            textAlign: "center",
            fontFamily: "trirong-bold",
          }}
        >
          News & content preferences
        </Text>
        <Text style={{ paddingTop: 30, textAlign: "center", fontSize: 15 }}>
          By default gawq shows everything in the order that it was published
          Headlines are the latest stories with the most media coverage.
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 30,
            fontWeight: "bold",
            fontSize: 15,
            paddingBottom: 40,
          }}
        >
          To get started lets add some filters and follow your favorite topics
        </Text>
        <TouchableOpacity
          style={{
            width: 300,
            backgroundColor: "#ffc62b",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
          onPress={() => navigation.navigate("MuteScreen")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Start with filters
          </Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", paddingTop: 50, fontSize: 16 }}>
          Skip
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
