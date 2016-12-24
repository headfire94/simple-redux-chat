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

const verification = () => ({
    type : types.AUTH_VERIFICATION
})

const verificationFail = () => ({
    type : types.AUTH_VERIFICATION_FAIL
})

const verificationSuccess = () => ({
    type : types.AUTH_VERIFICATION_SUCCESS
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

export const verificate = (password) => dispatch => {
    dispatch(verification())
    //симулируем запрос
    setTimeout(()=> {
        if (password.length === 0 || password !== '123') {
            //валим ошибку если ничего не ввели и если ввели не тот пароль
            dispatch(verificationFail())
            return
        }
        dispatch(verificationSuccess());
        browserHistory.push('/chat');
    }, 2500)

}