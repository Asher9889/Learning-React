import { useEffect, useState } from "react";
import { RESTURANT_URL } from "./constant";

const useMenu = (id)=>{
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchData(id)
    }, [])
 
    async function fetchData(id){
        try {
            const res = await fetch(RESTURANT_URL + id)
            const data = await res.json();
            setResMenu(data)
        } catch (error) {
            console.log("Menu is not fetchable")
        }
        
    }
    return resMenu;
}

export default useMenu;