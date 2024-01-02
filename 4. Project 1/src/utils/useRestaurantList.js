import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./constant";
const useRestaurantList = () => {
  // state variable
  const [restaurantList, setRestaurantList] = useState([]);
  //   API Calling
  useEffect(() => {
    fetchData();
  }, []);

  //   Data Fetching
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(restaurantList);
  return restaurantList;
};

export default useRestaurantList;
