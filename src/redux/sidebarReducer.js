const initialState = {
    sidebar: [
        {
            id: 1,
            name: "Alex",
            avatar: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg"
        }, {
            id: 2,
            name: "Victor",
            avatar: "https://i.pinimg.com/236x/42/99/69/4299698015b43062ca1f022416f53df6.jpg"
        }, {
            id: 3,
            name: "Max",
            avatar: "https://i.pinimg.com/236x/dd/f8/78/ddf87827dd19e5a841f1994688f84ce8.jpg"
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;