import React from "react";
import Post from "./Post/Post";
import mod from "./Posts.module.css"

const Posts = (props) => {
    const posts = props.posts.map(p => (<Post key={p.id} message={p.message} likes={p.likes}/>))

    return (
        <div className={mod.textArea}>
            <textarea onChange={props.onChangePost} placeholder="Введите текст" value={props.updateNewPost}/>
            <button onClick={props.createPost}>Send</button>
            {posts}
        </div>
    )
}

export default Posts;