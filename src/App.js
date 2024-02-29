import './App.css';
import React, {Suspense, lazy} from "react";
import NavBar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitializing} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getAppInitialized} from "./redux/selectors/app.Selector";
import {getAuthToken} from "./redux/selectors/headerSelectors";

const MessagesContainer = lazy(() => import("./components/Dialogs/MessagesContainer"))
const FriendsContainer = lazy(() => import("./components/Friends/FriendsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const LoginContainer = lazy(() => import("./components/Login/LoginContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.appInitializing(this.props.accessToken);
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
                    <Suspense fallback={Preloader}>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route exact path="/message"
                               render={() => <MessagesContainer/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                        <Route path="/friends" render={() => <FriendsContainer/>}/>
                    </Suspense>


                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Musics/>}/>
                    <Route path="/setting" render={() => <Settings/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appInitialized: getAppInitialized(state),
    accessToken:
        getAuthToken(state),
})

export default compose(connect(mapStateToProps, {
    appInitializing
}), withRouter)(App);