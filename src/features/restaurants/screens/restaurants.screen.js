import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import { theme } from "../../../infrastructure/Theme";
import { RestaurantContext } from "../../../services/restaurants/restaurents.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/Search.component";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator
            animating={true}
            size={45}
            color={MD2Colors.redA100}
          />
        </View>
      )}
      <View style={styles.search}>
        <Search />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
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
  loading: {
    backgroundColor: "#f6f6f6",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
