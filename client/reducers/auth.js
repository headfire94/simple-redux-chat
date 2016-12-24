import {
    AUTH_SIGN_IN,
    AUTH_SIGN_IN_FAIL,
    AUTH_SIGNING_IN,
} from '../constants/actionTypes';

const auth = (state = {
    username : undefined,
    loading : false,
    errors : false
}, action) => {
    switch (action.type) {
        case AUTH_SIGNING_IN :
            return {
                ...state,
                username: action.username,
                loading : true
            };
        case AUTH_SIGN_IN_FAIL :
            return {
                ...state,
                errors : true,
                loading : false
            };
        case AUTH_SIGN_IN :
            return {
                ...state,
                username: action.username,
                loading : false
            };
        default:
            return state
    }
};

export default auth;