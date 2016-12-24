import React, {
    Component,
} from 'react';
import {connect} from 'react-redux';

import {signIn} from '../../actions/authActions'

import styles from './style.scss';

import Form from '../Form'
import Preloader from '../Preloader'

class SingUp extends Component {
    onSubmit = (data) => {
        const {dispatch}= this.props;

        dispatch(signIn(data));
    }

    render() {
        const {loading, errors} = this.props;
        return (
            <div className={styles.auth}>Введите имя
                {
                    errors && <div className={styles.auth__error}>Введите хотябы 1 символ</div>
                }
                <Form onSubmit={this.onSubmit}/>
                <Preloader loading={loading}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errors : state.auth.errors,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps)(SingUp);


