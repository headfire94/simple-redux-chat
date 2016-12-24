import * as types from '../constants/ActionTypes';

const initialState = {
    screenWidth: null
}

const responsive = (state = initialState, action)=> {
    switch(action.type) {
       case types.CHANGE_WIDTH:
            return {
                ...state, screenWidth: action.screenWidth
            }
        default:
            return state;
    }
}

export default responsive;