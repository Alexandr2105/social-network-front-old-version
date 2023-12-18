import React from "react";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
    const state = props.store.getState();
    return <Sidebar state={state}/>
}

export default SidebarContainer;