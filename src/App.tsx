import React, { useLayoutEffect, useEffect, useState, useMemo } from 'react';
import Message from './components/Message';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchFirstMessages, fetchNewMessage } from './store/slices/messageSlice';
import { nanoid } from '@reduxjs/toolkit';

import styles from './App.module.css';

function App() {

    const dispatch = useAppDispatch();
    const messages = useAppSelector(state => state.messages.messages);
    const lastMessageId = useAppSelector(state => state.messages.lastMessageId);
    const [direction, setDirection] = useState<boolean>(false);

    // загрузка первоначальных сообщений

    useEffect(() => {
        dispatch(fetchFirstMessages())
    }, [])

    // таймер подгрузки новых сообщений после 5 секунд

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(fetchNewMessage(lastMessageId))
        }, 5000)

        return () => {
            clearInterval(timer)
        }
    }, [lastMessageId])

    const messagesElements = useMemo(() => {
        return messages.length === 0 ? null : messages.map(msg => (
                    <Message key={nanoid()} message={msg} />
                ))
    }, [messages.length])

    return (
        <main className={styles.App}>
            <button 
            className={styles.btn}
            onClick={() => {
                setDirection(state => !state)
            }}>
                Изменить порядок
            </button>
            <ul className={styles.list} style={{flexDirection: direction ? 'column-reverse' : 'column'}}>
                {messagesElements}
            </ul>
        </main>
    );
}

export default App;
