import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constant";
const useFilterRestaurant = (filterRestaurant) => {
  //   Local State Variable
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  //   API Calling
  useEffect(() => {
    fetchData();
  }, []);
  //   Fetching Data
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setFilterRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return filterRestaurant;
};
export default useFilterRestaurant;
