import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";

const reducer = combineReducers({
    profileReducer: profileReducer,
});

const store = createStore(reducer);

export default store;