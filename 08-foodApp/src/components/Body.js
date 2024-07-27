import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
    const [shops, setShops ] = useState([])
    const [filteredShop, setFilteredShop] = useState([])
    const resdata = useBodyData();
    
  
   
    const restaurants =
        resdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurants)

    useEffect(()=>{
        setShops(restaurants)
        setFilteredShop(restaurants)
    },[resdata])

    function filterList(){
       const filterdata = shops?.filter(shop => (shop.info.avgRating > 4.2))
       console.log(filterdata)
       setFilteredShop(filterdata);
    }

    return (
        <>
        
        {filteredShop?.length === 0 || filteredShop === undefined ?  <Shimmer /> :<div className="px-4 mt-4">
            <div>
             <button onClick={filterList} className="p-2 m-2 bg-zinc-300">filerBy4Star</button>
            </div>
            <div className="flex justify-center flex-wrap  gap-6">
                {filteredShop?.map((res) => (
                <Link key={res.info.id}  to={`/restaurant/${res.info.id}`}><Card  restaurant={res} /></Link>
                ))}
            </div>
        </div>}
        </>
    );
};

export default Body;
