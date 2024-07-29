import { IMG_URL } from "../utils/constant";

const ItemsList = ({item})=>{
    console.log(item)
    return (
        <div className="flex justify-between px-2 py-2">
            <div className="">
                <h3>{item?.card?.info?.name}</h3>
                <p>₹{item?.card?.info?.price/100}</p>
            </div>
            <div className="">
                <img className="w-20" src={IMG_URL + item?.card?.info?.imageId} />
            </div>
        </div>
    )
}

export default ItemsList;