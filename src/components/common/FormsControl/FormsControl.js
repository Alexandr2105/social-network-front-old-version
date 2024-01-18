import React from "react";
import mod from "./FormsControl.module.css"

export const Textarea = ({meta, input, ...props}) => {
    const data = meta.touched && meta.error;

    return (
        <div className={data ? mod.formControlError : ""}>
            <textarea {...props} {...input}/>
            {data && <p>{meta.error}</p>}
        </div>)
}

export const Input = ({meta, input, ...props}) => {
    const data = meta.touched && meta.error;

    return (
        <div className={data ? mod.formControlError : ""}>
            <input {...props} {...input}/>
            {data && <p>{meta.error}</p>}
        </div>)
}