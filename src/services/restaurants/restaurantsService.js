import { mockImages, mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location) => {
  const mock = mocks[location];
  if (!mock) {
    return "not found";
  }
  return mock;
};
export const getRestaurantsData = async (location) => {
  try {
    const result = await restaurantsRequest(location);
    const data = result.results;
    const mappedResult = data.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((photo) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
      return {
        ...restaurant,
        address: restaurant.vicinity,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
        isOpenNow:
          restaurant.opening_hours && restaurant.opening_hours.open_now,
      };
    });
    return camelize(mappedResult);
  } catch (error) {
    console.log(error);
  }
};
