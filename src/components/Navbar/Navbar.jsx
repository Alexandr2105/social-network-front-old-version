import React from "react";
import mod from "./Navbar.module.css";
import Item from "./NavItems/Item";

const NavBar = () => {
    return (
        <nav className={mod.nav}>
            <Item path="/profile" text="Profile"/>
            <Item path="/message" text="Messages"/>
            <Item path="/news" text="News"/>
            <Item path="/music" text="Musics"/>
            <Item path="/setting" text="Settings"/>
        </nav>
    );
}

export default NavBar;