import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import MessagesContainer from "./components/Dialogs/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="navbar">
                <NavBar/>
                <SidebarContainer/>
            </div>
            <div className="nav-links">
                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route exact path="/message"
                       render={() => <MessagesContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Musics/>}/>
                <Route path="/setting" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <FriendsContainer/>}/>
            </div>
        </div>);
}

export default App;
