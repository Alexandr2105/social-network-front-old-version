import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Messages from "./components/Dialogs/Messages";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import Sidebar from "./components/Sidebar/Sidebar";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="navbar">
                <NavBar/>
                <Sidebar state={props.state.sidebarReducer}/>
            </div>
            <div className="nav-links">
                <Route path="/profile"
                       render={() => <Profile state={props.state.profileReducer} dispatch={props.dispatch}/>}/>
                <Route exact path="/message"
                       render={() => <Messages state={props.state.dialogsReducer} dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Musics/>}/>
                <Route path="/setting" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends state={props.state.sidebarReducer}/>}/>
            </div>
        </div>);
}

export default App;
