
import { IMG_URL } from "../utils/constant.js"

const Card = ({restaurant})=>{

    const {id, name,areaName,locality, avgRating, costForTwo,cuisines,cloudinaryImageId   } = restaurant?.info
    
    
    return (
        <div className="w-64 p-4 rounded-md bg-blue-100 border-2 hover:border-black border-transparent cursor-pointer">
            <div className="w-full">
                <img className="w-full h-48 rounded-md object-cover" src={IMG_URL + cloudinaryImageId}/>
            </div>
            <div className="text-base text-zinc-700 mt-2">
                <h3 className="text-xl text-black font-bold">{name.substring(0,20)}</h3>
                <p>{costForTwo}</p>
                <p>{avgRating} Stars </p>
                <p>{`${locality}, ${areaName }`}</p>
                <div className="flex flex-wrap">
                    {cuisines?.map((cui)=>(
                    <p>{cui},&nbsp; </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;