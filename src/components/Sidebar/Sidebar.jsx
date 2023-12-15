import React from "react";
import SidebarFriends from "./SidebarFreinds/SidebarFriends";
import mod from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = (props) => (
    <div className={mod.sidebar}>
        <NavLink to="/friends">Friends</NavLink>
        <div className={mod.friends}>
            {<SidebarFriends state={props.state.sidebar}/>}
        </div>
    </div>
)

export default Sidebar;