import * as types from '../constants/actionTypes'
//@todo использовать redux-actions


export const switchRoom = (room) => ({
    type: types.SWITCH_ROOM,
    room
});

export const addNewMessage = (message) => ({
    type: types.ADD_MESSAGE,
    message
})

export const changeWidth = (screenWidth) => {
    return {
        type: types.CHANGE_WIDTH,
        screenWidth
    };
}

//@todo добавить throttle
export const initResponsive = ()=> {
    return dispatch => {
        dispatch(changeWidth(window.innerWidth));

        window.onresize = () => {
            dispatch(changeWidth(window.innerWidth));
        }
    };
}