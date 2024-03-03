const User = ({name})=>{
    return(
        <>
         <div className="user-card">
          <div>
            <div className="img-card"></div>
            <h3>UserName:{name}</h3>
            <h4>Location: New Delhi</h4>
            <h4>Contact: @Raj</h4>
          </div>
          </div>
        </>
    )
}

export default User;