import { combineReducers } from "redux";
import { REQUEST_IMAGE, GET_IMAGE, FAILED_REQUEST } from "../actions/fetchDog";

const INITIAL_STATE = {
    isFetching: false,
    imagePath: '',
    error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_IMAGE:
            return {...state, isFetching: true};
        case GET_IMAGE:
            return {...state, imagePath: action.payload, isFetching: false};
        case FAILED_REQUEST:
            return {...state, erro: action.payload, isFetching:false};        
        default:
            return state;
    }
}

const rootReducer = combineReducers({ reducer })

export default rootReducer;