import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CompactRestaurantInfo from "../../restaurants/components/compactRestaurantInfo";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

export default MapCallout;

const styles = StyleSheet.create({});
