import RestruntCard from "./RestruntCard";
import SearchBox from "./SearchBox";
//import data from "../data";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const MainBody =()=>{
    console.log("MainBody");
    //when State chnages, react reconciliation get triggers and re-render the component 
    //and its child component where the state got chnaged
    const [listOfRestrunant,setListOfRestrurant] = useState([]);
    const [filteredListOfRestrurant,setFilteredListOfRestrurant]=useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchRestroDetails();
    },[]);
    
    const fetchRestroDetails =  async()=>{
        const data = await fetch(`
        https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.568093&lng=77.4344775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const response = await data.json();
        setListOfRestrurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestrurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("This is list of restrurant", filteredListOfRestrurant);
        }
        

       //This is conditional rendering...    
    return listOfRestrunant.length===0 ? <ShimmerUI />:(<>
    <div className='rest-body'>
       
       {/* search text */}
        <div className='search-item'>
         <input type='text' placeholder='name of resturant' className='search-box' value={searchText} 
         onChange={(e)=>{setSearchText(e.target.value);} 
            
            }/>
         <button className='search-button' onClick={()=>{
           const restroName =listOfRestrunant.filter((r)=>{
            return r.info.name.toLowerCase().includes(searchText.toLowerCase());
           })
           setFilteredListOfRestrurant(restroName);
           setSearchText("");
         }}>Submit</button>
        
         {/* filter button */}
         <button className='search-button' 
         onClick={()=>{
           let filteredData = listOfRestrunant.filter((d)=>d.info.avgRating>4)
           setFilteredListOfRestrurant(filteredData);
            }}>Top Rated Resturant</button>
       
        </div>

        <hr />
        
        <div className='resturant-card'>
        {
            filteredListOfRestrurant.map(data=>{
                return <RestruntCard key={data?.info.id} d={data}/>
            })
        }
        </div>
    </div>

    </>);
}

export default MainBody;