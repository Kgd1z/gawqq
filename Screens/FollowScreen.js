import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Interest from "../Components/Interest";
const topics = [
  { text: "Tech", id: Math.random() },
  { text: "DIY", id: Math.random() },
  { text: "Football", id: Math.random() },
  { text: "Science", id: Math.random() },
  { text: "Business", id: Math.random() },
  { text: "Startups", id: Math.random() },
  { text: "LGBTQ", id: Math.random() },
  { text: "Stocks", id: Math.random() },
  { text: "Basketball", id: Math.random() },
  { text: "Music", id: Math.random() },
  { text: "Movies", id: Math.random() },
  { text: "Celebrities", id: Math.random() },
  { text: "Soccer", id: Math.random() },
  { text: "Health", id: Math.random() },
  { text: "Fitness", id: Math.random() },
  { text: "Travel", id: Math.random() },
  { text: "Crypto", id: Math.random() },
  { text: "Gaming", id: Math.random() },
  { text: "Cannabis", id: Math.random() },
  { text: "Sports", id: Math.random() },
  { text: "Design", id: Math.random() },
  { text: "MMA", id: Math.random() },
  { text: "Motorsport", id: Math.random() },
  { text: "Fashion", id: Math.random() },
  { text: "TV Shows", id: Math.random() },
  { text: "Recipes", id: Math.random() },
  { text: "Parenting", id: Math.random() },
  { text: "Auto", id: Math.random() },
  { text: "Crime", id: Math.random() },
  { text: "Tech", id: Math.random() },
  { text: "DIY", id: Math.random() },
  { text: "Football", id: Math.random() },
  { text: "Science", id: Math.random() },
  { text: "Business", id: Math.random() },
  { text: "Startups", id: Math.random() },
  { text: "LGBTQ", id: Math.random() },
  { text: "Stocks", id: Math.random() },
  { text: "Basketball", id: Math.random() },
  { text: "Music", id: Math.random() },
  { text: "Movies", id: Math.random() },
  { text: "Celebrities", id: Math.random() },
  { text: "Soccer", id: Math.random() },
  { text: "Health", id: Math.random() },
  { text: "Fitness", id: Math.random() },
  { text: "Travel", id: Math.random() },
  { text: "Crypto", id: Math.random() },
  { text: "Gaming", id: Math.random() },
  { text: "Cannabis", id: Math.random() },
  { text: "Sports", id: Math.random() },
  { text: "Design", id: Math.random() },
  { text: "MMA", id: Math.random() },
  { text: "Motorsport", id: Math.random() },
  { text: "Fashion", id: Math.random() },
  { text: "TV Shows", id: Math.random() },
  { text: "Recipes", id: Math.random() },
  { text: "Parenting", id: Math.random() },
  { text: "Auto", id: Math.random() },
  { text: "Crime", id: Math.random() },
];

function OptionGroup({ options }) {
  const [selected, setSelected] = useState([]);

  function selectToggle(option) {
    if (selected.includes(option.id)) {
      setSelected(selected.filter((el) => el !== option.id));
    } else {
      setSelected([...selected, option.id]);
    }
  }

  return options.map((option) => {
    return (
      <Interest
        onPress={() => selectToggle(option)}
        key={Math.random()}
        selected={selected.includes(option.id)}
        text={option.text}
      />
    );
  });
}
export default function FollowScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 10, alignItems: "center", width: 300 }}>
        <Image
          style={{ width: 128, height: 128 }}
          source={require("../assets/interests.png")}
        />
        <Text style={{ fontWeight: "bold", paddingTop: 20, fontSize: 25 }}>
          Follow your interests
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 15,
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          Choose a few of your favorite topics
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0,
          paddingVertical: 10,
          flexGrow: 1,
          height: 200,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollview}
          alwaysBounceHorizontal={true}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
            paddingRight: 40,
            width: 700,
          }}
        >
          <OptionGroup options={topics} />
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
        }}
        onPress={() => navigation.navigate("RecapScreen")}
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
