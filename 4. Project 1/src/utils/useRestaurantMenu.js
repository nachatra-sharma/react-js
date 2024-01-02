import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  //   State Variable for restaurant menu
  const [resItems, setResItems] = useState(null);
  // Res id
  const { resId } = useParams();
  //   Fetching Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResItems(json.data);
  };

  return resItems;
};

export default useRestaurantMenu;
