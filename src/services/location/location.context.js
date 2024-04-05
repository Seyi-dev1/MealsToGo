import { createContext, useEffect, useState } from "react";
import { getLocationData } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("San Francisco");
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    const func = async () => {
      try {
        if (!keyword.length) {
          return;
        }
        const response = await getLocationData(keyword.toLowerCase());
        setLocation(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    func();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
