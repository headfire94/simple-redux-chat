import React, {Component} from 'react'
import {browserHistory} from 'react-router';
import uuid from 'uuid';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'
import styles from './style.scss'
import classnames from 'classnames';
import moment from 'moment'

import {getVisibleMessages} from '../../selectors';

import MessageList from '../../components/MessageList'
import RoomsList from '../../components/RoomsList'
import MenuSwitcher from '../../components/MenuSwitcher'
import Form from '../../components/Form';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    componentWillUpdate () {
        const {access, username, activeRoom} = this.props;

        if (!username) {
            //если зашли без имени, возращаем обратно
            browserHistory.push('/');
        }

        if (!access && activeRoom.name == 'lobby') {
            //если нет доступа и переходят в лобби, переключаем на страницу подтверждения пароля
            browserHistory.push('/verification');
        }
    }

    handleSubmit = (data) => {
        const {activeRoom, username, actions} = this.props;

        if (data.length === 0) {
            //если ничего не ввели - действие не требуется
            return
        }

        let newMessage = {
            id: uuid.v4(),
            roomId: activeRoom.name,
            text: data,
            user: username,
            time: moment.utc().format('lll')
        };

        actions.addNewMessage(newMessage);
    }

    changeActiveRoom = (room) => {
        const {actions} = this.props;
        actions.switchRoom(room);
    }

    toggleMenu = () => {
        //@todo зделать нормальный click-outside
        this.setState(() => {
            return {
                showMenu: !this.state.showMenu
            }
        }, () => {
            if (this.state.showMenu) {
                this.refs.menu.focus();
            }
        })

    }


    render() {
        const {
            username,
            screenWidth,
            messages,
            rooms,
            activeRoom,
            children
        } = this.props;

        let showHamburger = screenWidth < 544;

        let chatRoomsClass = classnames({
            [styles.chat__rooms]: true,
            [styles.chat__rooms_show]: this.state.showMenu
        })

        return (
            <div className={styles.chat}>
                <div className={chatRoomsClass}
                     ref='menu'
                     onBlur={this.toggleMenu} tabIndex={-1}>
                    <div className={styles.chat__name}>Hello, {username}</div>
                    <RoomsList
                        onRoomClick={this.changeActiveRoom}
                        activeRoom={activeRoom}
                        rooms={rooms}/>
                </div>
                <div className={styles.chat__main}>
                    <header className={styles.chat__header}>
                        {showHamburger && <MenuSwitcher onClick={this.toggleMenu}/>}
                        {activeRoom.name}
                    </header>
                    <div className={styles.chat__body}>
                        <MessageList activeRoom={activeRoom}
                                     messages={messages}/>
                    </div>
                    <div className={styles.chat__footer}>
                        <Form
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        activeRoom: state.activeRoom,
        access : state.auth.access,
        username: state.auth.username,
        screenWidth: state.responsive.screenWidth,
        messages: getVisibleMessages(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
