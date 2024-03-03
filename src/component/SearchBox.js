import { useState } from "react";

const SearchBox =({d})=>{
    const [sendData,da] = d; 
    const [searchText,setSearchText] = useState("");
    
    return(<>
    <input type='text' placeholder='name of resturant' className='search-box' value={searchText} 
         onChange={(e)=>{setSearchText(e.target.value);} }/>

         <button className='search-button' onClick={()=>{
           const restroName =da.filter((r)=>{
            return r.info.name.toLowerCase().includes(searchText.toLowerCase());
           })
           sendData(restroName);
           setSearchText("");
         }}>Submit</button>
    </>)
}

export default SearchBox;