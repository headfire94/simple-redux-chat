import React, {
    PropTypes,
    Component
} from 'react';

import styles from './style.scss';

export class Form extends Component {

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleSubmit()
        }
    }

    getInputValue = () => {
        return this.refs.formInput.value
    }

    handleSubmit = ()=> {
        this.props.onSubmit(this.getInputValue())
        this.refs.formInput.value = ''
    }

    render() {
        return (
            <div className={styles.form}>
                <input type="textarea"
                       className={styles.form__field}
                       ref="formInput"
                       onKeyUp={this.handleKeyUp}
                       autoFocus={true}/>
                <button onClick={this.handleSubmit}
                        className={styles.form__submit}>
                    Отправить
                </button>
            </div>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
