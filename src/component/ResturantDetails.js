import {useEffect, useState} from 'react';
import ShimmerUI from './ShimmerUI';
import ResturantList from './ResturantList';
import { useParams } from 'react-router-dom';
import useRestaruntDetails from '../util/useRestaruntDetails';

const ResturantDetails =()=>{

// getting the id from pathVariable from the url...    it is imported from react-router-dom...
const {resId}= useParams();

console.log("restarunt ID",resId);

// Custome Hook,, This helped in writing clean code and abstract the business logic from this component.
const resDetails = useRestaruntDetails(resId);

if(resDetails.length===0){
    console.log("1")
    return <ShimmerUI />
}
const restList =resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card?.card;
 const restHeader = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards[0]?.card?.info;

    return(
    <>
    <div className='container'>
        <div className='body'>
            <div className='header-div'>
                    <div className='left-header'>
                    <h2>{restHeader.name}</h2>
                    <h5>{restHeader.cuisines}</h5>
                    <address>{restHeader.areaName+", " }{restHeader?.sla?.lastMileTravelString}</address>
                    <h4>{restHeader?.feeDetails?.message}</h4>
                    </div> 
                    <div className='right-header'>
                    <p><span className='star'>*</span><span>{restHeader?.avgRating}</span></p>
                    <hr />
                    <p>{restHeader.totalRatingsString}</p>
                    </div>
            </div>
            <hr />
             <div className='res-list'>
                <h3>Recommanded ({restList?.itemCards?.length})</h3>
                {restList?.itemCards.map((item,id)=> <ResturantList key={id} item={item}/>)}        
             </div>

        </div>

    </div>
    </>
    )
}

export default ResturantDetails;