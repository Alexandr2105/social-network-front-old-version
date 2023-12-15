import React from "react";
import mod from "./People.module.css"
import {NavLink} from "react-router-dom";

const People = (props) => {
    return (
        <div className={mod.dialogs}>
            <NavLink to={`message/${props.id}`}>
                <img src={props.avatar} alt="avatar"/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default People;