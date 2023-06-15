import React, { FC } from 'react';
import Avatar from '../../assets/images/svg/default-user.svg';
import {FaRegStar, FaStar} from 'react-icons/fa';

import styles from './Message.module.css';

const Message: FC = () => {

    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    return (

        <li className={styles.message} >
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <img src={Avatar} alt="avatar"/>
                    <p>{time}</p>
                </div>

                <div className={styles.textBlock}>
                    <div className={styles.textBlock__top}>
                        <div className={styles.author}>
                            <p>Nina Malofeeva</p>
                            <span>Текст поста в соц. сетях если это комментарий</span>
                        </div>
                        <div className={styles.favorite}>
                            <FaRegStar />
                        </div>
                    </div>

                    <div className={styles.content}>
                    "Россия 1" не боится снимать сериалы о сложных и неоднозначных периодах в истории нашей страны. Это и "В круге первом", и "Жизнь и судьба", и "Зулейха". Идёт работа над "Одним днём Ивана Денисовича". Вопрос Антону Златопольскому -почему вы считаете
                    </div>

                    <div className={styles.media}>
                        <img src={"https://media.iactive.pro/ZLmYglhqeDD/messages_images/telegram/503vbxSX1Lm5ijF3OKnmlaxrlf4Rzu1l.jpg"} alt="media-news" className={styles.media__item}/>
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

export default Message;