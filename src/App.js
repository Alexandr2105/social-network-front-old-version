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

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="nav-links">
                <Route path="/profile" render={() => <Profile state={props.state.profileReducer} dispatch={props.dispatch}/>}/>
                <Route path="/message" render={() => <Messages/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Musics/>}/>
                <Route path="/setting" render={() => <Settings/>}/>
            </div>
        </div>);
}

export default App;
