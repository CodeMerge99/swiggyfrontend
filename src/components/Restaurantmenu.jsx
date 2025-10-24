import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resinfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.14630&lng=79.08490&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  
  if (resinfo == null) return <ShimmerUI />;


  const { name, costForTwo, avgRating, cuisines } =
    resinfo?.cards?.[2]?.card?.card?.info || {};

  
  const itemCards =
    resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} - {costForTwo}
      </h2>
      <h3>⭐ {avgRating}</h3>

      <ul>
        <li>
          <h1>We Serve The Best Food out these In Pune</h1>
        </li>
        <li>
          <h1>Try it Out Soon</h1>
        </li>
      </ul>

      <h1>Menu Details</h1>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} — ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

