import React from "react";
import img from './../Img/img.png'
import "./../../Styles/userInfo.css"

const UserInfo = () => {
    return (
        <div className="user-info">
            <button className="logout-button">Logout</button>
            <img alt="Profile" className="img" src={img}/>
        </div>
    )
}

export default UserInfo;