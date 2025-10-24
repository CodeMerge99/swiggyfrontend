import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        // //creating state in class component//
        this.state = {
            userInfo:{
                name:"deafult name",
                location:"deafault location"
            }
        }
    }

    async componentDidMount(){
        console.log("component did mount")
        //making api call//
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const res = await data.json();
        console.log(res);
        this.setState({
            userInfo:res,
        });
         
    }
    render(){
        return(
            <div className="user-card">
            <h1>Username:{this.state.userInfo.name}</h1>
            <h2>Location:{this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url}/>
            </div>
        )
    }
}

export default UserClass;