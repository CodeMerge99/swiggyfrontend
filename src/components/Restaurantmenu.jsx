import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
 
  const resinfo = useRestaurantMenu(resId);
  
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

