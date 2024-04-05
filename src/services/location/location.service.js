import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  const mockLocation = locations[searchTerm];

  if (!mockLocation) {
    return "not found";
  }
  return mockLocation;
};

export const getLocationData = async (searchTerm) => {
  try {
    const result = await locationRequest(searchTerm);
    const formattedResult = camelize(result);
    const data = formattedResult.results;
    const { geometry = {} } = data[0];
    const { lat, lng } = geometry.location;
    return { lat, lng };
  } catch (error) {
    console.log(error);
  }
};
