import {
    ADD_MESSAGE
} from '../constants/actionTypes';



const initialState = {
    data : [
        {
            id : '23423r32r2',
            text : 'Привет это начальное сообщение из комнаты 1',
            roomId : 'room1',
            user : 'testUser1',
            time : '2016-12-29'
        },
        {
            id : '23423r32r2252',
            text : 'Привет это начальное сообщение из комнаты 2',
            roomId : 'room2',
            user : 'testUser1',
            time : '2016-12-22'
        },
        {
            id : '23423r32212r2252',
            text : 'Привет это начальное сообщение из лобби',
            roomId : 'lobby',
            user : 'testUser1',
            time : '2016-12-12'
        }
    ]
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state,
                data: [...state.data, action.message]
            };
        default:
            return state;
    }
};



export default messages;