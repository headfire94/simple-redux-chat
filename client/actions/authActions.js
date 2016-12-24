import {browserHistory} from 'react-router';
import * as types from '../constants/actionTypes'

const validateSignIn = (username) => ({
    type: types.AUTH_SIGNING_IN,
    username
})

const receiveSignIn = (username) => ({
    type: types.AUTH_SIGN_IN,
    username
})

const failSignIn = () => ({
    type : types.AUTH_SIGN_IN_FAIL
})

export const signIn = (username) => dispatch => {
    dispatch(validateSignIn(username))
    //симулируем запрос
    setTimeout(()=> {
        if (username.length === 0 ) {
            //валим ошибку если ничего не ввели
            dispatch(failSignIn())
            return
        }
        dispatch(receiveSignIn(username));
        browserHistory.push('/chat');
    }, 2500)

}