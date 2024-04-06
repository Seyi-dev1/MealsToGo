import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <Searchbar
      placeholder="Enter a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};
