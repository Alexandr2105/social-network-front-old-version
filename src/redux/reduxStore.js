import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer:dialogsReducer,
});

const store = createStore(reducer);

export default store;