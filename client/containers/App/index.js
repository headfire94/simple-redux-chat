import styles from './style.scss';

import React, {
    Component,
} from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions/actions'

class App extends Component {
    componentDidMount() {
        let {actions} = this.props;
        console.log(actions);
        actions.initResponsive();
    }
    render() {
        return (
            <div className={styles.app}>
                {this.props.children}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(null,mapDispatchToProps)(App);
