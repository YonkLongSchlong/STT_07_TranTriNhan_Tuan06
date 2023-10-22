import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ItemCard2 from "../components/ItemCard2";

export default function SecondScreen() {
  const items = [
    {
      id: 1,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/daucam 1.png"),
    },
    {
      id: 2,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/carbusbtops2 1.png"),
    },
    {
      id: 3,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/dauchuyendoi 1.png"),
    },
    {
      id: 4,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/dauchuyendoipsps2 1.png"),
    },
    {
      id: 5,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/giacchuyen 1.png"),
    },
    {
      id: 6,
      name: "Cáp chuyển từ cổng USB sang PS2",
      img: require("../assets/daynguon 1.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        ItemSeparatorComponent={() => {
          return <View style={styles.line} />;
        }}
        data={items}
        renderItem={ItemCard2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
});
