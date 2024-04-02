import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, getRestaurantsData } from "./restaurantsService";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);
        const response = await getRestaurantsData();
        setTimeout(() => {
          setIsLoading(false);
          console.log(response);
          setRestaurants(response);
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
