import { Message } from './message';
import { useState, useEffect, useRef, useCallback } from "react";
import { Send } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const getBotAnswer = (message) => {
    const answers = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
    }

    return answers[message] || "Something on bot's language";
}

export const MessageList = () => {

    const [messageList, setMessageList] = useState({});
    const [message, setMessage] = useState('');

    const { roomId } = useParams();
    const messages = messageList[roomId] ?? [];

    const clickHandler = useCallback((text, author = "User", date = new Date()) => {
        if (text) {
            setMessageList((messageList) => ({
                ...messageList,
                [roomId]: [
                    ...(messageList[roomId] ?? []),
                    { author, text, date }
                ]
            }));
        }

        setMessage("");
    }, [roomId]);

    const keyPressHandler = (e) => {
        if ((e.code === "Enter") || (e.code === "NumpadEnter")) {
            clickHandler(message);
        }
    };

    const scrollBot = useCallback(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTo(0, messageListRef.current.scrollHeight);
        }
    }, []);

    const messageRef = useRef(null);
    const messageListRef = useRef(null);

    useEffect(() => {
        messageRef.current?.focus();
    }, []);

    useEffect(() => {
        const mesages = messageList[roomId] ?? [];
        const lastMessage = mesages[mesages.length - 1];
        if (mesages.length && lastMessage.author !== "Bot") {
            const timerId = setTimeout(() => {
                clickHandler(getBotAnswer(lastMessage.text), "Bot");
            }, 500);
            return () => {
                clearInterval(timerId);
            };
        }
    }, [clickHandler, messageList, roomId]);

    useEffect(() => {
        scrollBot();
    }, [messageList, scrollBot]);

    return (
        <div className='messages-container'>
            <div className='message-list' ref={messageListRef}>
                {messages.map((item, index) => {
                    return (
                        <Message key={index} item={item} />
                    );
                })}
            </div>
            <div className='message-list__form'>
                <input
                    type="text"
                    ref={messageRef}
                    className='message-list__input'
                    placeholder="Enter message..."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={keyPressHandler}
                    value={message}
                />
                <Send
                    className='message-list__send'
                    type='submit'
                    onClick={() => clickHandler(message)}
                />
            </div>
        </div>
    );
}