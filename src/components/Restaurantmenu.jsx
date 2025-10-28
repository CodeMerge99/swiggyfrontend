import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex,setShowIndex] = useState(null);

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
  

  return (
    <div className="text-center">
      <h1 className="my-9 text-2xl font-bold">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwo}
      </h2>
      <h3>⭐ {avgRating}</h3>
      {
        categories.map((category,index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
        showItems={index === showIndex ? true :false}
        setShowIndex ={()=>showIndex(index)}
        />)
      }
    </div>
  );
};

export default RestaurantMenu;
