import React from "react";
import mod from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import avatar from "../../assets/images/images.png";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={mod.content}>
            <img src={props.profile.avatar || avatar}
                 alt="img"/>
            <input key={props.profile.avatar} type={"file"} onChange={props.onChange}/>
            <ProfileStatusContainer/>
            <div>
                <PostsContainer/>
            </div>
        </div>
    );
}

export default Profile;