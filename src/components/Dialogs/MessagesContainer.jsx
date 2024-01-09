import {createMessage, onChangeMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import Messages from "./Messages";

export class MessagesContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Messages messages={this.props.messages} dialogs={this.props.dialogs}
                         updateNewMessage={this.props.updateNewMessage} onChangeMessage={this.props.onChangeMessage}
                         createMessage={this.props.createMessage}/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        updateNewMessage: state.dialogsReducer.updateNewMessage,
    };
}

export default connect(mapStateToProps, {
    onChangeMessage, createMessage
})(MessagesContainer);