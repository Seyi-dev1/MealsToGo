import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import { theme } from "../../../infrastructure/Theme";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: theme.sizes[1],
  },
  list: {
    // backgroundColor: "teal",
    flex: 1,
    padding: theme.space[3],
  },
});
