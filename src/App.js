import './App.css';
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import MessagesContainer from "./components/Dialogs/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitializing} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.appInitializing();
    }

    render() {
        if (!this.props.appInitialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="navbar">
                    <NavBar/>
                    <SidebarContainer/>
                </div>
                <div className="nav-links">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route exact path="/message"
                           render={() => <MessagesContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Musics/>}/>
                    <Route path="/setting" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({
    appInitialized: state.appReducer.appInitialized,
})

export default compose(connect(mapStateToProps, {appInitializing}), withRouter)(App);