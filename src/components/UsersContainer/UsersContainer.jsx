import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToPops = (state) => {
    return {users: state.usersReducer.users}
}
const mapDispatchToPops = (dispatch) => {
    return {
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),
        setState: (users) => dispatch(setUsers(users)),
    }
}

const UsersContainer = connect(mapStateToPops, mapDispatchToPops)(Users)

export default UsersContainer;