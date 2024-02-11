import { useState } from "react";
const Header =()=>{

   const [name,setName] = useState("Login");

    return(
    <div className="header">
        <div className='image'>
            <img src='https://th.bing.com/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7' alt="Slow_Internet" />
        </div> 

        <ul>
        <li><a href='#' className='link'>Home</a></li>
        <li><a href='#' className='link'>AboutUs</a></li>
        <li><a href='#' className='link'>Cart</a></li>
        <li><a href='#' className='link'>ContactUs</a></li>
        </ul>
        <button className="btn-name" onClick={()=>{
            name==="Login"?setName("Logout"):setName("Login")
        }}>{name}</button>
        
    </div>
    )
}

export default Header;