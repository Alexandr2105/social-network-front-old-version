import React from "react";
import mod from "./Profile.module.css";

const ProfileStatus = (props) => {
    return (
        <div className={mod.status}>
            {!props.state.editMode &&
                <div>
                    <span onDoubleClick={props.activeEditMode}>{props.state.status}</span>
                </div>
            }
            {props.state.editMode &&
                <div>
                    <input placeholder="Введите текст" autoFocus={true} onBlur={props.deActiveEditMode}
                           onChange={props.onChangeStatus} value={props.state.status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;