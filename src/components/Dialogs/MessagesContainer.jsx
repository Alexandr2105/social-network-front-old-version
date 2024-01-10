import {createMessage, onChangeMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import Messages from "./Messages";
import {Redirect} from "react-router-dom";

export class MessagesContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return this.props.isAuth ? <Messages messages={this.props.messages} dialogs={this.props.dialogs}
                                             updateNewMessage={this.props.updateNewMessage}
                                             onChangeMessage={this.props.onChangeMessage}
                                             createMessage={this.props.createMessage}/> : <Redirect to="/login"/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        updateNewMessage: state.dialogsReducer.updateNewMessage,
        isAuth: state.loginReducer.isAuth,
    };
}

export default connect(mapStateToProps, {
    onChangeMessage, createMessage
})(MessagesContainer);