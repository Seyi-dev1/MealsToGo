import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import { theme } from "../../../infrastructure/Theme";
import { RestaurantContext } from "../../../services/restaurants/restaurents.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/Search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favouriteBar.component";
import FadeInAnimation from "../../../components/animations/fade.animation";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIstoggled] = useState(false);

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
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIstoggled(!isToggled)}
        />
      </View>
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

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
              <FadeInAnimation>
                <RestaurantInfoCard restaurant={item} />
              </FadeInAnimation>
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
