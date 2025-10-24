import React from "react";

const User = ({name})=>{
    return (
        <div className="user-card">
            <h1>UserName: {name}</h1>
            <h2>Location: Nagpur</h2>
            <h2>Contact : piyushtirpude@gmail.com</h2>
        </div>
    )
}

export default User;