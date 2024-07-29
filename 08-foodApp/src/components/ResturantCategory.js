import { useState } from "react";
import ItemsList from "./ItemsList"

const ResturantCategory = ({category,showList, setShowIndex, showOrHidelist})=>{
    
    console.log(category)
    const title = category?.card?.card?.title
    const items = category?.card?.card?.itemCards

    function handleClick(){
        showOrHidelist()
    }

    return (
        <div className="bg-zinc-200 py-4 shadow-xl my-6  rounded-md px-2">
            <div onClick={handleClick} className="flex justify-between">
                <h3 className="text-xl font-bold cursor-pointer"> &nbsp;{title} &nbsp;({items?.length})</h3>
                Down
            </div>
            {showList && items?.map((item)=>(
                <ItemsList item={item}  />
            ))}
        </div>
    )
}

export default ResturantCategory;