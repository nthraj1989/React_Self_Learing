//This component is a customeHook..It just fetch the restarurant details from the API and sends the 
//details back to ResturantDetails.js component.

import { useEffect, useState } from "react";

const useRestaruntDetails = (id)=>{

    //fetch api and set the details in State hook..

    const [resDetails, setResDetails] = useState([]);

    useEffect(()=>{
        fetchMenu();
        return ()=>{console.log("unmount")}
    },[])

    const fetchMenu = async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.568093&lng=77.4344775&restaurantId="+id
        +"&catalog_qa=undefined&submitAction=ENTER");
        const data = await response.json();
        setResDetails(data?.data);
        console.log(resDetails);
    }
    return resDetails;
}

export default useRestaruntDetails;
