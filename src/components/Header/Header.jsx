import React from "react";
import mod from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={mod.header}>
            <img src="https://pngimg.com/d/mario_PNG125.png" alt="mario"/>
            <div className={mod.login}>
                <span>{props.isAuth ? props.fullName : <NavLink to={"/login"}>
                    <button>Login</button>
                </NavLink>}</span>
                {props.isAuth && <button onClick={props.logout}>Log out</button>}
            </div>
        </header>)
}

export default Header;