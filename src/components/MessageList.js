import { Message } from './Message';
import { useState, useEffect, useRef } from "react";
import { Send } from '@mui/icons-material';

export const MessageList = () => {

    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    // const [chats, setChats] = useState([{
    //   name: "Bot",
    //   id: 1
    // }]);

    const messageRef = useRef(null);

    useEffect(() => {
        messageRef.current?.focus();
    }, []);

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1]?.author !== 'Bot') {
            setTimeout(() => {
                setMessageList([...messageList, {
                    text: 'Something in bot\'s language',
                    author: 'Bot'
                }]);
            }, 1500);
        }
    }, [messageList]);

    const clickHandler = () => {
        if (message) {
            setMessageList([...messageList, {
                text: message,
                author: 'User'
            }]);
        }

        setMessage('');
    }

    const keyPressHandler = (e) => {
        if (e.code === "Enter") {
            clickHandler();
        }
    }

    return (
        <div className='messages-container'>
            <div className='message-list'>
                {messageList.map((item, index) => {
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
                    onClick={clickHandler}
                />
            </div>
        </div>
    );
}