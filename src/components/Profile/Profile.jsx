import React from "react";
import mod from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={mod.content}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="img"/>
            <div>
                <PostsContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Profile;