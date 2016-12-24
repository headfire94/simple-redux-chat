import { createSelector } from 'reselect';

const getActiveRoom = (state) => state.activeRoom;
const getMessages = (state) => state.messages;

export const getVisibleMessages = createSelector(
    [getActiveRoom, getMessages],
    (activeRoom, messages) => {
        switch (activeRoom.name) {
            case 'lobby': //в лобби попадают все сообщения
                return messages.data
            default: //в комнате отображаются только ее сообщения и сообщения написанные в лобби
                return messages.data.filter(message => message.roomId === activeRoom.name || message.roomId === 'lobby')
        }
    }
)