import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AcountNavigator } from "./account.navigator";
import { RestaurantContextProvider } from "../../services/restaurants/restaurents.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import SettingsNavigator from "./settings.navigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = "restaurant";
                    } else if (route.name === "Settings") {
                      iconName = "settings";
                    } else if (route.name === "Map") {
                      iconName = "map";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                  headerShown: false,
                })}
              >
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      ) : (
        <AcountNavigator />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  noAuth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNavigator;
