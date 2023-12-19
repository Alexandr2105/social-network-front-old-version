import React from "react";
import mod from "./SidebarFriends.module.css";

const SidebarFriends = (props) => {
    return props.state.map(s => {
        return (
            <div key={s.id} className={mod.sidebar}>
                <img src={s.avatar} alt={"avatar"}/>
                <p>{s.name}</p>
            </div>
        )
    });
}

export default SidebarFriends;