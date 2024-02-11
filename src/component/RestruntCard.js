const RestruntCard = ({d})=>{
    console.log("RestruntCard");
    return(
    <div className='restro-card'>
        <div className='content'>
            <div className='restro-img'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${d?.info?.cloudinaryImageId}`} alt='' />
            </div>
            <div  className='restro-details'>
              <h3 className='restro-name'>{d?.info?.name}</h3>
              <h5 className='cuisian'><span>{d?.info.avgRating}</span>{d?.info.cuisines.join("  ")}</h5>
              <h5 className='restro-addr'>{`${d?.info.locality} , ${ d?.info.areaName}`}</h5>
            </div>
        </div>
    </div>
    )
}

export default RestruntCard;