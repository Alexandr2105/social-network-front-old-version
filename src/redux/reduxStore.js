import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer:dialogsReducer,
    sidebarReducer:sidebarReducer,
});

const store = createStore(reducer);

export default store;