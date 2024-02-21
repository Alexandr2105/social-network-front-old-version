import React from "react";
import mod from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={mod.content}>
            {/*<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="img"/>*/}
            <img src={props.profile.avatar || "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}
                 alt="img"/>
            <ProfileStatusContainer/>
            <div>
                <PostsContainer/>
            </div>
        </div>
    );
}

export default Profile;