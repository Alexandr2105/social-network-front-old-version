import React from "react";
import mod from "./Friends.module.css"

const Friends = (props) => {
    const friends = props.sidebar.map(f =>
        <div key={f.id} className={mod.friendInfo}>
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