import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <View style={styles.compactItem}>
      <Image
        source={{ uri: restaurant.photos[0] }}
        style={styles.compactImage}
      ></Image>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

export default CompactRestaurantInfo;

const styles = StyleSheet.create({
  compactItem: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
    borderRadius: 25,
  },
  compactImage: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
});
