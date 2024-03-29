import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

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
      <RestaurantsScreen />
      <StatusBar />
    </>
  );
}
