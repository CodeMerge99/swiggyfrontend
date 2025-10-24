import {  useEffect, useState } from "react";
import { useParams } from "react-router";


const useRestaurantmenu =(resid)=>{
     const [resInfo,setResInfo] = useState(null);

    async function fetchMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5291453&lng=73.8741484&restaurantId="+ resid + "0&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    useEffect(()=>{
        fetchMenu();
    },[]);

    return resInfo
}

export default useRestaurantmenu;