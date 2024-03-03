import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(){
        super();
        console.log("This is About constructor");
    }

    componentDidMount(){
        console.log("About Component did mount");
    }

    render(){
        console.log("About render function called");
        return(
            <>
            <h1>This is About us page</h1>
            {/* <User  name={"Rajnish"}/> */}
            <UserClass  name={"Rajnish"}/>
            </>
            )
    }
}

export default About;