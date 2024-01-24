import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import React from "react";
import {getSidebar} from "../../redux/selectors/sidebarSelector";

export class SidebarContainer extends React.Component {
    render() {
        return <Sidebar sidebar={this.props.sidebar}/>
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: getSidebar(state),
    }
}

export default connect(mapStateToProps)(SidebarContainer);