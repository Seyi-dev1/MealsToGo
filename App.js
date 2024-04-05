import { SafeAreaView, StatusBar } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurents.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};
const MapScreen = () => {
  return (
    <SafeAreaView>
      <Text>Map</Text>
    </SafeAreaView>
  );
};

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <AppNavigator />
          <StatusBar />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </>
  );
}
