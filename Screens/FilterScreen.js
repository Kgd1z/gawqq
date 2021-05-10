import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Option from "../Components/Option";
export default function FilterScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center", width: 300 }}>
        <Image
          style={{ width: 128, height: 128 }}
          source={require("../assets/filter.png")}
        />
        <Text style={{ fontWeight: "bold", paddingTop: 20, fontSize: 25 }}>
          Filter by category
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 15,
            textAlign: "center",
            paddingBottom: 40,
          }}
        >
          These categories produce 70% of the daily news. Turn off what you
          dislike.
        </Text>
      </View>
      <View style={{ height: 350 }}>
        <ScrollView showsVerticalScrollIndicator="false" style={{}}>
          <Option
            title="Politics"
            description="Government Elections or political figures."
          />
          <Option
            title="Pop culture"
            description="Entertainment celebrity or showbiz gossip"
          />
          <Option title="Sports" description="Pro or college sporting events" />
          <Option title="Finance" description="Stocks or personal finance" />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: "#ffc62b",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate("FollowScreen")}
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
