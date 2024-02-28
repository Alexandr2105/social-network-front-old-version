import {connect} from "react-redux";
import {followOrUnfollowShowStatus, users, setClickButton} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {
    getClickButton,
    getCurrentPage,
    getFetching,
    getPageCount,
    getPagesForView,
    getUsers
} from "../../redux/selectors/usersSelectors";
import {getAuthToken} from "../../redux/selectors/headerSelectors";

class UsersContainer extends React.Component {
    state = {
        part: 1,
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage);
    }

    activePage = (p) => {
        this.props.getUsers(p);
    }

    onClickNext = () => {
        this.setState({part: this.state.part + 1});
    }

    onClickPrev = () => {
        this.setState({part: this.state.part - 1});
    }

    render() {
        return <Users pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} users={this.props.users}
                      activePage={this.activePage} isClickButton={this.props.isClickButton}
                      setClickButton={this.props.setClickButton} isFetching={this.props.isFetching}
                      followOrUnfollowShowStatus={this.props.followOrUnfollowShowStatus}
                      viewPages={this.props.viewPages} onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}
                      state={this.state} authToken={this.props.authToken}/>
    }
}

const mapStateToPops = (state) => {
    return {
        users: getUsers(state),
        pagesCount: getPageCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        isClickButton: getClickButton(state),
        viewPages: getPagesForView(state),
        authToken: getAuthToken(state),
    }
}

export default compose(connect(mapStateToPops, {
    setClickButton, getUsers: users, followOrUnfollowShowStatus,
}))(UsersContainer);