import React, {
    Component,
} from 'react';
import {connect} from 'react-redux';

import {verificate} from '../../actions/authActions'

import styles from './style.scss';

import Form from '../Form'
import Preloader from '../Preloader'

class Verification extends Component {
    onSubmit = (data) => {
        const {dispatch}= this.props;

        dispatch(verificate(data));
    }

    render() {
        const {loading, errors} = this.props;
        return (
            <div className={styles.auth}>Введите пароль (123)
                {
                    errors && <div className={styles.auth__error}>Неправильный пароль</div>
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

export default connect(mapStateToProps)(Verification);


