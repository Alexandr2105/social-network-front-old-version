const initialState = {
    dialogs: [
        {
            id: 1,
            name: "Alexandr",
            avatar: "https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=480&w=480"
        },
        {
            id: 2,
            name: "Egor",
            avatar: "https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg"
        },
        {
            id: 3,
            name: "Lena",
            avatar: "http://forcakes.kz/image/cache/catalog/i/kl/jp/db2960fc46399d8c899e4ab852f04013-800x1000.jpg"
        },
        {
            id: 4,
            name: "Sasha",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eeftPnBGQ1o9EIpWHiotYJs5Bz2gD9ecIQ&usqp=CAU"
        }
    ],
    messages: [
        {
            id: 1,
            message: "Hi every one!"
        }, {
            id: 2,
            message: "Thank you so much)"
        }, {
            id: 3,
            message: "Good bye!"
        }
    ],
    updateNewMessage: "",
};


const ADD_MESSAGE_ACTION_TYPE = "ADD_MESSAGE_ACTION_TYPE";
const UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE = "UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE";

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION_TYPE:
            const newMessage = {
                id: 4,
                message: state.updateNewMessage,
            }
            return {...state, messages: [...state.messages, newMessage], updateNewMessage: ""}
        case UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE: {
            return {...state, updateNewMessage: action.newText};
        }
        default :
            return state;
    }
}

const addMessageActionCreator = () => ({type: ADD_MESSAGE_ACTION_TYPE});
const updateTextNewMessageActionCreator = (text) => ({type: UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE, newText: text});

export const onChangeMessage = (e) => {
    return (dispatch) => {
        const text = e.target.value;
        dispatch(updateTextNewMessageActionCreator(text));
    }
}

export const createMessage = () => {
    return (dispatch)=>{
        dispatch(addMessageActionCreator());
    }
}

export default dialogsReducer;