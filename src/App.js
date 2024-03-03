import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import MainBody from './component/MainBody';
import About from './component/About';
import Error from './component/Error';
import Contact from './component/contact';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import ResturantDetails from './component/ResturantDetails';


//fetchRestroDetails();

const App = ()=>{
    console.log("App Component");
   
    return(
        <>
        <div className='container'>
            <Header />
            <Outlet />
        </div>
        </>
    )
    
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />, 
        children:[
            {
                path:"/",
                element: <MainBody />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contactus",
                element:<Contact />
            },
            {
                path:"/restarunts/:resId",
                element:<ResturantDetails />
            }
        ],
       errorElement:<Error />
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
