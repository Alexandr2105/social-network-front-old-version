import {connect} from "react-redux";
import Friends from "./Friends";
import React from "react";
import {getSidebar} from "../../redux/selectors/sidebarSelector";

export class FriendsContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Friends sidebar={this.props.sidebar}/>
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: getSidebar(state),
    }
}

export default connect(mapStateToProps, {})(FriendsContainer);