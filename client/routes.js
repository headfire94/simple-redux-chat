import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from './containers/App'
import MessageList from './components/MessageList'
import SingUp from './components/SingUp'
import Chat from './containers/Chat';

export default <Route path="/" component={App}>
    <IndexRoute component={SingUp}/>
    <Route path="/chat" component={Chat}>
        <Route path='/chat/:roomId' component={MessageList}/>
    </Route>
</Route>