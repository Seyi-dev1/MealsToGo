import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  return (
    <View style={styles.compactItem}>
      {isAndroid && isMap ? (
        <WebView
          source={{ uri: restaurant.photos[0] }}
          style={styles.compactImage}
        />
      ) : (
        <Image
          source={{ uri: restaurant.photos[0] }}
          style={styles.compactImage}
        ></Image>
      )}

      <Text style={styles.text}>{restaurant.name}</Text>
    </View>
  );
};

export default CompactRestaurantInfo;

const styles = StyleSheet.create({
  compactItem: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
    borderRadius: 10,
  },
  compactImage: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  text: {
    textAlign: "center",
  },
});
