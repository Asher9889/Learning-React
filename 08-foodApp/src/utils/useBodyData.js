import { useEffect, useState } from "react"
import {API_URL} from "../utils/constant"

const useBodyData = ()=>{
    const [resdata, setResData] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        try {
            const res = await fetch(API_URL)
            const data = await res.json();
            setResData(data);  
        } catch (error) {
            console.log("data request fail")
        }
    }

    return resdata;
}

export default useBodyData;