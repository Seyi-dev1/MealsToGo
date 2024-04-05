import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Search } from "../components/search.component";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  search: {
    position: "absolute",
    top: 20,
    width: "100%",
    zIndex: 999,
    padding: 10,
    paddingTop: 0,
  },
});
