import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/profileReducer";

const Posts = (props) => {

    const posts = props.state.posts.map(p => (<Post message={p.message} likes={p.likes}/>))

    const onChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateTextNewPostActionCreator(text));
    }

    const createPost=()=>{
        props.dispatch(addPostActionCreator());
    }

    return (
        <div>
            <textarea onChange={onChange} placeholder="Введите текст" value={props.state.updateNewPost}/>
            <button onClick={createPost}>Send</button>
            {posts}
        </div>)
}

export default Posts;