import * as types from '../constants/actionTypes'

export const switchRoom = (room) => ({
    type: types.SWITCH_ROOM,
    room
});

export const addNewMessage = (message) => ({
    type: types.ADD_MESSAGE,
    message
})

export const calculateResponsiveState = ({innerWidth, matchMedia} = {}) => {
    return {
        type: types.CALCULATE_RESPONSIVE_STATE,
        innerWidth,
        matchMedia,
    }
}

export const changeWidth = (screenWidth) => {
    return {
        type: types.CHANGE_WIDTH,
        screenWidth
    };
}

export const initResponsive = ()=> {
    return dispatch => {
        dispatch(changeWidth(window.innerWidth));

        window.onresize = () => {
            dispatch(changeWidth(window.innerWidth));
        }
    };
}