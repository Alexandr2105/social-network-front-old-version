import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer:dialogsReducer,
    sidebarReducer:sidebarReducer,
    usersReducer:usersReducer,
});

const store = createStore(reducer);

export default store;