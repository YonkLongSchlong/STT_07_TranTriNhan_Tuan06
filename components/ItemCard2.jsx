import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ItemCard2({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.img} />
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.starContainer}>
        <AntDesign name="star" size={12} color="yellow" />
        <AntDesign name="star" size={12} color="yellow" />
        <AntDesign name="star" size={12} color="yellow" />
        <AntDesign name="star" size={12} color="yellow" />
        <AntDesign name="staro" size={12} color="black" />
        <Text>(15)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={{ fontWeight: "bold" }}>69.000đ</Text>
        <Text>-39%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "48%",
    marginHorizontal: "2%",
    marginVertical: 10,
    justifyContent: "center",
    gap: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 90,
    width: 155,
    resizeMode: "center",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
