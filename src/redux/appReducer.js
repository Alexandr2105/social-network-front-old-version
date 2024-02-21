import {getUserInformation} from "./loginReducer";

const initialState = {
    appInitialized: false,
}

const APP_INITIALIZED = "social-network/app/APP_INITIALIZED";

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_INITIALIZED: {
            return {
                ...state,
                appInitialized: true,
            }
        }
        default :
            return state;
    }
}

const successInitialized = () => ({type: APP_INITIALIZED});

export const appInitializing = () => async (dispatch) => {
    await Promise.all([dispatch(getUserInformation())]);
    dispatch(successInitialized());
}

export default appReducer;