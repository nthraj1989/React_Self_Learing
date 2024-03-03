import RestruntCard from "./RestruntCard";
import SearchBox from "./SearchBox";
//import data from "../data";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const MainBody =()=>{
    console.log("MainBody");
    //when State chnages, react reconciliation get triggers and re-render the component 
    //and its child component where the state got chnaged
    const [listOfRestrunant,setListOfRestrurant] = useState([]);
    const [filteredListOfRestrurant,setFilteredListOfRestrurant]=useState([]);
  

    // callback function which will be called when search button is called

    const sendData = (d) => {
        console.log(d);
        setFilteredListOfRestrurant(d)
      }

    useEffect(()=>{
        fetchRestroDetails();
    },[]);
    
    const fetchRestroDetails =  async()=>{
        const data = await fetch(`
        https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.568093%26lng%3D77.4344775%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`);
        const response = await data.json();
        setListOfRestrurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestrurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        

       //This is conditional rendering...    
    return listOfRestrunant.length===0 ? <ShimmerUI />:(<>
    <div className='rest-body'>
       
       {/* search text */}
        <div className='search-item'>  
            {/* Search logic is abstracted from here to 
            search component, we are sending data from child to parent */}

        <SearchBox  d={[sendData,filteredListOfRestrurant]}/>  
         
         {/* filter button */}
         <button className='search-button' 
         onClick={()=>{
           let filteredData = listOfRestrunant.filter((d)=>d.info.avgRating>4)
           setFilteredListOfRestrurant(filteredData);
            }}>Top Rated Resturant</button>

         {filteredListOfRestrurant.length!==listOfRestrunant.length?<button className='search-button' onClick={()=>{
            setFilteredListOfRestrurant(listOfRestrunant);
         }}>
            ClearFilter</button>:" "}
       
        </div>

        <hr />
        
        <div className='resturant-card'>
        {
            filteredListOfRestrurant.map(data=>{
               
                return <Link className="card-link" key={data?.info.id} to={"/restarunts/"+data?.info.id}><RestruntCard  d={data}/></Link>
            })
        }
        </div>
    </div>

    </>);
}

export default MainBody;