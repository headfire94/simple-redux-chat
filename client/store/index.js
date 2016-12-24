import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {logger} from '../middleware'
import rootReducer from '../reducers'

export default function configure(initialState) {
    let middlewares = [thunk, logger];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));


    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
