import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { useEffect, useState } from "react";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {
  const [ResData, setResData] = useState([]);
  const [showIndex, setShowIndex] = useState(null)
  const { id } = useParams();

  const data = useMenu(id);

  useEffect(() => {
    setResData(data);
  }, [data]);

  const resDetails = ResData?.data?.cards[2]?.card?.card?.info;

  const category =
    ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredCategory = category?.filter(
    (cat) =>
      cat.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(filteredCategory);

  // You made it saurabh
  //  Cheers
  function showOrHidelist(index){
    if(index=== showIndex){
      setShowIndex(null)
    }else{
      setShowIndex(index)
    }
  }

  return (
    <div className="">
      {ResData && (
        <div className="px-4 flex flex-col gap-2 pb-6 bg-amber-100 w-1/2  mx-auto pt-4">
          <h1 className="text-3xl text-center font-bold">
            {resDetails?.name} Menu
          </h1>
          <p className="text-center">
            {resDetails?.costForTwoMessage} &nbsp; &#x2022; &nbsp;{" "}
            {resDetails?.avgRating} Stars
          </p>
        </div>
      )}
      <div className="w-1/2 mx-auto">
        {filteredCategory?.map((cat, index) => (
          <ResturantCategory
            
            showList={index === showIndex ? true : false}
            // setShowIndex name ka ek function bana diya hai
            // bss isko call kara dena hai index to map krte waqt to automatic add ho jayega na
            // setShowIndex={()=>setShowIndex(index)}
            showOrHidelist={()=>showOrHidelist(index)}
            category={cat}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
