import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarReducer.sidebar,
    }
}

const FriendsContainer=connect(mapStateToProps)(Friends);

export default FriendsContainer;