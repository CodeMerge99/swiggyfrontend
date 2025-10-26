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

  const categories =
    resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@types"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  console.log(categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} - {costForTwo}
      </h2>
      <h3>⭐ {avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;
