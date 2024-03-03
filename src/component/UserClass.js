import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component{


    // ****** proprs in class component
    // constructor(props){
    //     //console.log(this.props);
    //     super(props);
    //     this.state={
    //         count:0,
    //         message:"",
    //     }
    //     console.log("User constructor");
    // }



    constructor(props){
        super(props);
        console.log("User class Constructor called")

        this.state={
            userInfo:{
                avatar_url:"",
                login:"Raj",
                id:0,
            },
            m:console.log("State updated"),
        };
    }

    componentDidMount(){
        console.log("User Component did mount");
        const fetchUser = async()=>{
            const res = await fetch("https://api.github.com/users/nthraj1989");
            const json = await res.json()
            console.log(json);
            this.setState({
                userInfo:json,
            })
        }
        fetchUser();

       
    }
    

    componentDidUpdate(){
        console.log("User component Update");
    }

    render(){
        console.log("User render");
        const {login, avatar_url, id} =this.state.userInfo;

        return(
            <>
            <div className="user-card">
             <div>
               <div className="img-card"><img src={avatar_url} /></div>
               
               {/*<h5>{this.state.message?this.state.message:""}</h5>
               <h1>counter {this.state.count}</h1>
                <button 
               onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    message:"",
                  })
               }}>+</button> */}

               {/* <button 
               onClick={()=>{
                this.state.count!==0?this.setState({
                    count:this.state.count-1,
                  }):this.setState({message:"The value cannot be less than 0"})
               }}>-</button> */}


               <h3>UserName:{login}</h3>
               <h4>Location: {id}</h4>
               <h4>Contact: {login}</h4>
             </div>
             </div>
           </>
        )
    }
}

export default UserClass;