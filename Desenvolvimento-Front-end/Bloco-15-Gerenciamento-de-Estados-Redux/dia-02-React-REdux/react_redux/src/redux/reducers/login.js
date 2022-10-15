import {ADD_EMAIL} from '../action'

const INITIAL_STATE = {
    emailGlobal: '',
    lista: [],
}

function loginReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_EMAIL:
            return {
                ...state,
                emailGlobal: action.email,
            }
        default:
            return state;
    }

}

export default loginReducer;