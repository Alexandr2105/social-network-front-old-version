import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setPagesCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`http://localhost:3001/users?pageNumber=${this.props.currentPage}`).then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setPagesCount(response.data.pagesCount);
        })
    }

    activePage = (p) => {
        this.props.setFetching(true);
        axios.get(`http://localhost:3001/users?pageNumber=${p}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setFetching(false);
        })
        this.props.setCurrentPage(p);
    }

    render() {
        return <Users pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} users={this.props.users}
                      activePage={this.activePage} unfollow={this.props.unfollow} follow={this.props.follow}
                      isFetching={this.props.isFetching}/>
    }
}

const mapStateToPops = (state) => {
    return {
        users: state.usersReducer.users,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
    }
}

export default connect(mapStateToPops, {
    follow, unfollow, setUsers, setPagesCount, setCurrentPage, setFetching
})(UsersContainer);