import styles from './style.scss'

import React, {
    Component,
} from 'react';

import classnames from 'classnames';

const MessageList = ({messages, activeRoom}) => {
    return (
        <ul className={styles.messageList}>
            {messages.map(m => {
                return  <li key={m.id} className={styles.messageListItem}>
                            <div className={styles.messageListItem__name}>{m.user}
                                <span className={styles.messageListItem__time}>{m.time}</span>
                                {activeRoom.name === 'lobby' &&
                                    <span className={styles.messageListItem__room}>{m.roomId}</span>
                                }
                            </div>
                            <div className={styles.messageListItem__text}>{m.text}</div>
                        </li>
            })}
        </ul>
    );
}

export default MessageList;
