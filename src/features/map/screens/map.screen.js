import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurents.context";
import { Marker, Callout } from "react-native-maps";
import MapCallout from "../components/mapCallOut";

export default function MapScreen() {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.search}>
        <View style={styles.main}>
          <Search />
        </View>
      </SafeAreaView>
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
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
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999,
  },
  main: {
    padding: 10,
  },
});
