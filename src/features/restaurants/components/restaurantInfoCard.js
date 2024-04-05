import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../../infrastructure/Theme";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            {ratingArray.map((item, index) => {
              return (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`star-${placeId}-${index}`}
                />
              );
            })}
          </View>
          <View style={styles.otherInfo}>
            {isClosedTemporarily && (
              <Text style={{ color: "red", fontSize: 11 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Image source={{ uri: icon }} style={{ width: 15, height: 15 }} />
          </View>
        </View>
        <Text style={styles.address}>{address}</Text>
      </View>
    </Card>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.bg.primary,
    marginBottom: theme.space[3],
  },
  cover: {
    padding: theme.sizes[1],
    backgroundColor: "white",
  },
  info: {
    padding: theme.space[3],
    paddingTop: theme.space[0],
  },
  title: {
    color: theme.colors.ui.primary,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
  },
  address: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.caption,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    paddingTop: theme.space[2],
    paddingBottom: theme.space[2],
  },
  otherInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
