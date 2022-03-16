import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import {
    messagesSelector,
    sendMessage,
    updateValue,
    valueSelector,
} from "../../store";

const getBotAnswer = (message) => {
    const answers = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
    };

    return answers[message] || "Something on bot's language";
};

export const MessageList = () => {
    const dispatch = useDispatch();
    const { roomId } = useParams();

    // console.log("MessageList component");

    /* useMemo нужен для сохранения ссылки на функцию messagesSelector,
    так как внутри store/messages/selectors.js через корирование передается пропс roomId
    и возвращается новая функция с новой ссылкой */
    const getMessages = useMemo(() => messagesSelector(roomId), [roomId]);
    const messages = useSelector(getMessages);
    const value = useSelector(valueSelector);
    const [message, setMessage] = useState(value);

    const send = useCallback(
        (message, author = "User") => {
            if (message) {
                dispatch(
                    sendMessage(roomId, {
                        author: author || "Bot",
                        text: message,
                    }),
                );
                dispatch(updateValue(message));
            }
            setMessage("");
        },
        [roomId, dispatch],
    );

    const keyPressHandler = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            send(message);
        }
    };

    const scrollBot = useCallback(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTo(
                0,
                messageListRef.current.scrollHeight,
            );
        }
    }, []);

    const messageRef = useRef(null);
    const messageListRef = useRef(null);

    useEffect(() => {
        messageRef.current?.focus();
    }, []);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        if (messages.length && lastMessage.author !== "Bot") {
            const timerId = setTimeout(() => {
                send(getBotAnswer(lastMessage.text), "Bot");
            }, 500);
            return () => {
                clearInterval(timerId);
            };
        }
    }, [send, messages, roomId]);

    useEffect(() => {
        scrollBot();
    }, [messages, scrollBot]);

    return (
        <div className="messages-container">
            <div className="message-list" ref={messageListRef}>
                {messages.map((item, index) => {
                    return <Message key={index} item={item} roomId={roomId} />;
                })}
            </div>
            <div className="message-list__form">
                <input
                    type="text"
                    ref={messageRef}
                    className="message-list__input"
                    placeholder="Enter message..."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={keyPressHandler}
                    value={message}
                />
                <Send
                    className="message-list__send"
                    type="submit"
                    onClick={() => send(message)}
                />
            </div>
        </div>
    );
};
