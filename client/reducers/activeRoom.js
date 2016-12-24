import {
    SWITCH_ROOM
} from '../constants/actionTypes'

let initialState = {
    name : 'lobby',
    id : 0
}

const activeRoom = (state = initialState, action)=> {
    switch (action.type) {
        case SWITCH_ROOM:
            return {
                name: action.room.name,
                id : action.room.id
            };

        default:
            return state;
    }
}

export default activeRoom;