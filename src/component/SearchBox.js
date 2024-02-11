import { useState } from "react";

const SearchBox =({data})=>{
    const [text,setText] = useState([]);
    console.log("search");
    return(<>
    <div className='search-item'>
         <input type='text' placeholder='search box' className='search-box' />
         <button className='search-button' 
         onClick={()=>{
            data.filter((d)=>{
                if(d.info.avgRating>4){
                    return setText(d);
                }
            })
            }}>Submit</button>
        </div>
    </>)
}

export default SearchBox;