import React from "react";
import mod from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={mod.header}>
            <img src="https://pngimg.com/d/mario_PNG125.png" alt="mario"/>
            <span>{props.isAuth ? props.fullName : <NavLink to={"/login"}>login</NavLink>}</span>
        </header>)
}

export default Header;