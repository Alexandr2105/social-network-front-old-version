import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        updateNewPost: state.profileReducer.updateNewPost,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => dispatch(updateTextNewPostActionCreator(text)),
        cratePost: () => dispatch(addPostActionCreator()),
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;