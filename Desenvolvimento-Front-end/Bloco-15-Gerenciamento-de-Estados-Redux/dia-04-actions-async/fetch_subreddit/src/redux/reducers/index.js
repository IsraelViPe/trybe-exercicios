import { combineReducers } from "redux";
import { SELECTED_THEME, ERROR } from "../actions";

const INITIAL_STATE = {
    subreddit : [],
    error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECTED_THEME : 
        return {
            ...state, subreddit: action.theme
        }
        case ERROR : 
        return {
            ...state, error: action.error
        }
        default: 
        return state;
    }
}

const rootReducer = combineReducers({reducer})

export default rootReducer;