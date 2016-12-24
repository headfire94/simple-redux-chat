import React, {
    PropTypes,
} from 'react';

import styles from './style.scss'

const Preloader = ({loading}) => {
    if (loading === true) {
        return ( <div className={styles.preloader}></div> )
    }
    return (
        <div>

        </div>
    );
};

Preloader.propTypes = {
    loading : PropTypes.bool.isRequired
};

export default Preloader;
