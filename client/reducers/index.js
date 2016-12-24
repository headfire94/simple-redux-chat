import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import auth from './auth'
import activeRoom from './activeRoom'
import responsive from './responsive'
import rooms from './rooms'
import messages, * as fromMessages from './messages';

export const getVisibleMessages = (state, activeRoom) => {
    return fromMessages.getVisibleMessages(state.messages, activeRoom || 'lobby')
}

export default combineReducers({
    routing,
    activeRoom,
    rooms,
    messages,
    auth,
    responsive
})

