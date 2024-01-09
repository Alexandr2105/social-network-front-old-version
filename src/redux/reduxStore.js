import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    loginReducer: loginReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;