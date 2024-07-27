import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
const RestaurantMenu = ()=>{

    const {id} = useParams();
    console.log(id)
    const ResData = useMenu(id);

    console.log(ResData)
    const restaurantName = ResData?.data?.cards[0]?.card?.card?.text
    console.log(ResData)
    const items = ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    // console.log(items)
    
    return (
        
        <div className="px-4 flex flex-col gap-2 mb-6 bg-amber-100 w-1/2 mx-auto pt-4">
            <h1 className="text-3xl text-center font-bold">{restaurantName} Menu</h1>
            {items?.map(item => (
                <h2  key={item.card.info.id} className="text-xl"><b>{`${item.card.info.name} for  ${(item.card.info.price)/100}`}</b></h2>
            ))}
        </div>
    )
}

export default RestaurantMenu;