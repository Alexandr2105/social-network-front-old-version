import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        updateNewMessage: state.dialogsReducer.updateNewMessage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: () => dispatch(addMessageActionCreator()),
        updateMessage: (text) => dispatch(updateTextNewMessageActionCreator(text)),
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;