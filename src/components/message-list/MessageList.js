import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import {
    messagesSelector,
    updateValue,
    valueSelector,
    sendMessageWithBot,
} from "../../store";

export const MessageList = () => {
    const dispatch = useDispatch();
    const { roomId } = useParams();

    /* useMemo нужен для сохранения ссылки на функцию messagesSelector,
    так как внутри store/messages/selectors.js через корирование передается пропс roomId
    и возвращается новая функция с новой ссылкой */
    const messages = useSelector(
        useMemo(() => messagesSelector(roomId), [roomId]),
    );
    const value = useSelector(useMemo(() => valueSelector(roomId), [roomId]));

    const [message, setMessage] = useState({});

    const messageListRef = useRef(null);

    const send = useCallback(
        (text, author = "User") => {
            if (text) {
                dispatch(
                    sendMessageWithBot(roomId, {
                        author: author || "Bot",
                        text,
                    }),
                );
            }
            setMessage({ ...message, [roomId]: "" });
        },
        [message, roomId, dispatch],
    );

    const keyPressHandler = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            send(message[roomId]);
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

    useEffect(() => {
        setMessage((message) => ({ ...message, [roomId]: value }));
    }, [roomId, value]);

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
                    className="message-list__input"
                    placeholder="Enter message..."
                    onChange={(e) =>
                        setMessage({ ...message, [roomId]: e.target.value })
                    }
                    onKeyPress={keyPressHandler}
                    value={message[roomId] || ""}
                    onBlur={() =>
                        dispatch(updateValue(roomId, message[roomId]))
                    }
                />
                <Send
                    className="message-list__send"
                    type="submit"
                    onClick={() => send(message[roomId])}
                />
            </div>
        </div>
    );
};
