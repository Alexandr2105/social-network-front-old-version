import React from "react";
import mod from "./Friends.module.css"

const Friends = (props) => {
    const friends = props.state.sidebarReducer.sidebar.map(f =>
        <div className={mod.friendInfo}>
            <img src={f.avatar} alt="avatar"/>
            <p>{f.name}</p>
        </div>
    )

    return (
        <div className={mod.friends}>
            {friends}
        </div>
    )
}

export default Friends;