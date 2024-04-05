import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { getRestaurantsData } from "./restaurantsService";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const fetchRestaurants = async (city) => {
    try {
      setIsLoading(true);
      setRestaurants([]);
      const response = await getRestaurantsData(city);
      setTimeout(() => {
        setIsLoading(false);
        setRestaurants(response);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      fetchRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
