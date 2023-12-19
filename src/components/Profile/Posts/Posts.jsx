import React from "react";
import Post from "./Post/Post";
import mod from "./Posts.module.css"

const Posts = (props) => {
    const posts = props.posts.map(p => (<Post key={p.id} message={p.message} likes={p.likes}/>))

    const onChange = (e) => {
        const text = e.target.value;
        props.updatePost(text);
    }

    const createPost = () => {
        props.cratePost();
    }

    return (
        <div className={mod.textArea}>
            <textarea onChange={onChange} placeholder="Введите текст" value={props.updateNewPost}/>
            <button onClick={createPost}>Send</button>
            {posts}
        </div>
    )
}

export default Posts;