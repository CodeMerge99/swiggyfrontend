import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

  const [showItems,setShowItems] = useState(false);

  const handleClick =()=>{
       setShowItems(!showItems);
  }
  return (
    <div>
        {/* {header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span>{data.title}</span>
        <span>
          <FaArrowDown />
        </span>
        </div>
        { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
