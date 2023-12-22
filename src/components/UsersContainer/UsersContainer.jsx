import {connect} from "react-redux";
import {follow, setCurrentPage, setPagesCount, setUsers, unfollow} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/users?pageNumber=${this.props.currentPage}`).then(response => {
            this.props.setState(response.data.items);
            this.props.setPagesCount(response.data.pagesCount);
        })
    }

    activePage = (p) => {
        axios.get(`http://localhost:3001/users?pageNumber=${p}`).then(response => {
            this.props.setState(response.data.items);
        })
        this.props.setCurrentPage(p);
    }

    render() {
        return <Users pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} users={this.props.users}
                      activePage={this.activePage} unfollow={this.props.unfollow} follow={this.props.follow}/>
    }
}

const mapStateToPops = (state) => {
    return {
        users: state.usersReducer.users,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage
    }
}
const mapDispatchToPops = (dispatch) => {
    return {
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),
        setState: (users) => dispatch(setUsers(users)),
        setPagesCount: (pages) => dispatch(setPagesCount(pages)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    }
}

export default connect(mapStateToPops, mapDispatchToPops)(UsersContainer);