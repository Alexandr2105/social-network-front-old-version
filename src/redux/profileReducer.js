const initialState = {
    posts: [
        {
            id: 1,
            message: "Hi, my name is Alex.",
            likes: "20"
        }, {
            id: 2,
            message: "What is you name?",
            likes: 10
        }, {
            id: 3,
            message: "How are you?",
            likes: 99
        }
    ],
    updateNewPost: "",
};


const ADD_POST_ACTION_TYPE = "ADD_POST_ACTION_TYPE";
const UPDATE_TEXT_NEW_POST_ACTION_TYPE = "UPDATE_TEXT_NEW_POST_ACTION_TYPE";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_ACTION_TYPE: {
            const newPost = {
                id: 4,
                message: state.updateNewPost,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], updateNewPost: ""};
        }
        case UPDATE_TEXT_NEW_POST_ACTION_TYPE: {
            return {...state, updateNewPost: action.newText}
        }
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_ACTION_TYPE});
export const updateTextNewPostActionCreator = (text) => ({type: UPDATE_TEXT_NEW_POST_ACTION_TYPE, newText: text});

export default profileReducer;