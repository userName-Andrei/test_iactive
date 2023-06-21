import { FC, memo } from 'react';
import Avatar from '../../assets/images/svg/default-user.svg';
import { IMessage } from '../../types/messageTypes';
import stringCutter from '../../utils/stringCutter';
import { nanoid } from '@reduxjs/toolkit';
import MediaBlock from '../MediaBlock';
import Favorite from '../Favorite';

import styles from './Message.module.css';

interface MessageProps {
    message: IMessage
}

const Message: FC<MessageProps> = ({message}) => {

    const {id, author, attachments, channel, content, date, region} = message;

    const timeBlock = new Date(date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    const mediaBlock = attachments.length === 0 ? null :
                       attachments.map(media => <MediaBlock key={nanoid()} type={media.type} url={media.url} />);

    const contentBlock = stringCutter(content, 200);

    if (!message) {
        return null
    }

    return (
        <li className={styles.message}>
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <img src={Avatar} alt="avatar"/>
                    <p>{timeBlock}</p>
                </div>

                <div className={styles.textBlock}>
                    <div className={styles.textBlock__top}>
                        <div className={styles.author}>
                            <p>{author}</p>
                            <span>{channel}</span>
                        </div>
                        <Favorite id={id} />
                    </div>

                    <div className={styles.content}>
                        {contentBlock}
                    </div>

                    <div className={styles.media}>
                        {mediaBlock}
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.tags}>
                    <a href="/" className={`${styles.tag} ${styles.active}`}>#Новое</a>
                    <a href="/" className={styles.tag}>#Эксперт</a>
                </div>
            </div>
        </li>
    );
};

export default memo(Message);