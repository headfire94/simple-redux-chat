import React, {
    Component,
} from 'react';

import styles from './style.scss'

class MenuSwitcher extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={styles.menuSwitcher}>
                <div className={styles.menuSwitcher__line}></div>
                <div className={styles.menuSwitcher__line}></div>
                <div className={styles.menuSwitcher__line}></div>
            </div>
        );
    }
}

export default MenuSwitcher;
