import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useContext } from "react";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import { theme } from "../../../infrastructure/Theme";
import { RestaurantContext } from "../../../services/restaurants/restaurents.context";

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
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
});
