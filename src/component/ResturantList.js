const ResturantList =({item})=>{
    return(<>
    <div className='list-of-rest'>
                 <span style={{color:item.card?.info?.ribbon.textColor,
                    backgroundColor:item?.card?.info?.ribbon.bottomBackgroundColor,}}>
                        {item?.card?.info?.ribbon.text}</span>   
                <h4>{item?.card?.info?.name}</h4>
                <p>&#x20b9; {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
                </div>
                <p className='desc'>{item?.card?.info?.description}</p>
                <hr />
    </>)
}

export default ResturantList;