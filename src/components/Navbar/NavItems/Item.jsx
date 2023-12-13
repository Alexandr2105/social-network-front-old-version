import React from "react";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <div>
            <NavLink to={props.path}>{props.text}</NavLink>
        </div>
    )
}

export default Item;