import styles from './styles.scss';

import React, {
    PropTypes,
} from 'react';

import classnames from 'classnames'


const RoomsList = ({rooms, activeRoom, onRoomClick}) => {

    return (
        <ul className={styles.roomslist}>
            {rooms.map(r => {

                let linkClass = classnames({
                    [styles.roomslist__link]: true,
                    [styles.roomslist__link_active]: r.name === activeRoom.name
                })

                return <li key={r.id}
                           className={styles.roomslist__item}>
                            <a className={ linkClass }
                               onClick = {()=> {
                                   onRoomClick(r)
                               }}
                               href="#">
                                {r.name}
                            </a>
                        </li>
            })}
        </ul>
    );
};

RoomsList.propTypes = {
    rooms : PropTypes.array.isRequired,
    activeRoom : PropTypes.object.isRequired
};

export default RoomsList;
