import React from "react";
import mod from "./People.module.css"

const People = (props) => {
    return (
        <div className={mod.dialogs}>
            <img src={props.avatar} alt="avatar"/>
            <p>
                {props.name}
            </p>
        </div>
    )
}

export default People;