import {
    SWITCH_ROOM
} from '../constants/actionTypesNames'

let initialState = {
    name : 'room1',
    id : 1
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