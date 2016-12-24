import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from './containers/App'

import SingUp from './components/SingUp'
import Verification from './components/Verification'
import Chat from './containers/Chat';

export default <Route path="/" component={App}>
    <IndexRoute component={SingUp}/>
    <Route path="/chat" component={Chat}/>
    <Route path="/verification" component={Verification}/>
</Route>