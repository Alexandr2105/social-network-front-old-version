import mod from "../../components/Users/Users.module.css";
import React from "react";
import preloader from "../../assets/images/gear-spinner.svg"

const Preloader = () => {
    return (
        <div className={mod.preloader}>
            <img src={preloader} alt="reloader"/>
        </div>
    )
}

export default Preloader;