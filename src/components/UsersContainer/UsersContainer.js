import {connect} from "react-redux";
import {
    follow,
    setClickButton,
    setCurrentPage,
    setFetching,
    setPagesCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage).then(data => {
            this.props.setFetching(false);
            this.props.setUsers(data.items);
            this.props.setPagesCount(data.pagesCount);
        })
    }

    activePage = (p) => {
        this.props.setFetching(true);
        usersAPI.getUsers(p).then(data => {
            this.props.setUsers(data.items);
            this.props.setFetching(false);
        })
        this.props.setCurrentPage(p);
    }

    render() {
        return <Users pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} users={this.props.users}
                      activePage={this.activePage} unfollow={this.props.unfollow} follow={this.props.follow}
                      isFetching={this.props.isFetching} isClickButton={this.props.isClickButton}
                      setClickButton={this.props.setClickButton}/>
    }
}

const mapStateToPops = (state) => {
    return {
        users: state.usersReducer.users,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isClickButton: state.usersReducer.isClickButton,
    }
}

export default connect(mapStateToPops, {
    follow, unfollow, setUsers, setPagesCount, setCurrentPage, setFetching, setClickButton
})(UsersContainer);