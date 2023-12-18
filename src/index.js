import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";

const reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
reRender(store.getState());
store.subscribe(() => {
    const state = store.getState();
    reRender(state);
});
