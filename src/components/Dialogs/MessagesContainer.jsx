import {createMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../redux/selectors/dialogsSelectors";
import {getAuth} from "../../redux/selectors/headerSelectors";
import {reset} from "redux-form";

export class MessagesContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Messages messages={this.props.messages} dialogs={this.props.dialogs}
                         createMessage={this.props.createMessage} reset={this.props.reset}/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        dialogs: getDialogs(state),
        isAuth: getAuth(state),
    };
}

export default compose(connect(mapStateToProps, {createMessage, reset}), withAuthRedirect)(MessagesContainer);