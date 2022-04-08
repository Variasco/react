import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import {
    messagesSelector,
    sendMessageInDB,
    getMessagesFromDB,
    chatsSelector,
    updateValueInDB,
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

    const chats = useSelector(chatsSelector);
    const valueses = chats.reduce((acc, cur) => {
        acc[cur.title] = cur.value;
        return acc;
    }, {});
    const [values, setValue] = useState(valueses);

    const messageListRef = useRef(null);

    const send = useCallback(
        (text, author = "User") => {
            if (text) {
                dispatch(
                    sendMessageInDB(roomId, {
                        author: author || "Bot",
                        text,
                    }),
                );
            }
            setValue({ ...values, [roomId]: "" });
        },
        [roomId, dispatch, values],
    );

    const keyPressHandler = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            send(values[roomId]);
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
        scrollBot();
    }, [messages, scrollBot]);

    useEffect(() => {
        dispatch(getMessagesFromDB(roomId));
    }, [dispatch, roomId]);

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
                        setValue({ ...values, [roomId]: e.target.value })
                    }
                    onKeyPress={keyPressHandler}
                    value={values[roomId]}
                    onBlur={() =>
                        dispatch(updateValueInDB(roomId, values[roomId]))
                    }
                />
                <Send
                    className="message-list__send"
                    type="submit"
                    onClick={() => send(values[roomId])}
                />
            </div>
        </div>
    );
};
