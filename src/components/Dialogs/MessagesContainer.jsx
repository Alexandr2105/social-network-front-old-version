import {createMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class MessagesContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Messages messages={this.props.messages} dialogs={this.props.dialogs}
                         createMessage={this.props.createMessage}/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        isAuth: state.loginReducer.isAuth,
    };
}

export default compose(connect(mapStateToProps, {createMessage}), withAuthRedirect)(MessagesContainer);