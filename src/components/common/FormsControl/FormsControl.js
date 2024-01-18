import React from "react";
import mod from "./FormsControl.module.css"

export const FormsControl = ({meta, children}) => {
    const data = meta.touched && meta.error;

    return (
        <div className={data ? mod.formControlError : ""}>
            {children}
            {data && <p>{meta.error}</p>}
        </div>)
}

export const Textarea = (props) => {
    const {meta, input, children, ...restProps} = props;

    return (
        <FormsControl{...props}>
            <textarea {...restProps} {...input}/>
        </FormsControl>)
}

export const Input = ({...props}) => {
    const {meta, input, children, ...restProps} = props;

    return (
        <FormsControl {...props}>
            <input {...input} {...restProps}/>
        </FormsControl>
    )
}