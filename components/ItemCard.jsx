import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function ItemCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemImageContainer}>
        <Image style={styles.image} source={item.img} />
      </View>
      <View style={styles.itemDescription}>
        <Text>{item.name}</Text>
        <Text>
          <span style={{ color: "red" }}>Shop: </span>
          {item.shopName}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={{ color: "white" }}>Chat</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    backgroundColor: "#e6e4e1",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
  },
  itemImageContainer: {
    flex: 1,
    flexBasis: "30%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
  itemDescription: {
    flexDirection: "column",
    flex: 1,
    flexBasis: "50%",
    gap: 10,
    flexShrink: 0,
    flexWrap: "nowrap",
    overflow: "hidden",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexBasis: "20%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
