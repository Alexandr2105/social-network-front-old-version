import React from "react";
import mod from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={mod.content}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="img"/>
            <div>
                <Posts state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;