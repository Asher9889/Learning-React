import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice"

const ItemsList = ({item})=>{
    const dispatch = useDispatch()

    function handleAddItem (item){
        dispatch(addItem(item));
    }

    return (
        <div className="flex justify-between px-2 py-2">
            <div className="">
                <h3>{item?.card?.info?.name}</h3>
                <p>₹{item?.card?.info?.price/100}</p>
            </div>
            <div className="relative bg-red-800">
                <img className="w-20" src={IMG_URL + item?.card?.info?.imageId} />
                <button onClick={()=> handleAddItem(item)} className="bg-black text-white p-[3px] absolute top-0 -translate-x-[50%] translate-x-[50%]">Add +</button>
            </div>
        </div>
    )
}

export default ItemsList;