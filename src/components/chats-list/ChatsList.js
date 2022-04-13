import { Button, List } from "@mui/material";
import {
    chatsSelector,
    getChatsFromDB,
    createChatInDB,
    deleteChatFromDB,
} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Chat } from "./chat";
import { useCallback, useEffect } from "react";

export const ChatsList = () => {
    const chats = useSelector(chatsSelector);
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewChatByName = () => {
        const name = prompt("Enter the name of the chat");
        const isValidChatName = !chats.includes(name);

        if (name && isValidChatName) {
            dispatch(createChatInDB(name));
        } else {
            alert("Incorrect name of the chat");
        }
    };

    const deleteChatByName = useCallback(
        (name) => {
            dispatch(deleteChatFromDB(name));

            setTimeout(() => {
                navigate("/chats");
            }, 0);
        },
        [dispatch, navigate],
    );

    useEffect(() => {
        dispatch(getChatsFromDB());
    }, [dispatch]);

    return (
        <div className="chats-nav-container">
            <Button onClick={addNewChatByName}>New chat</Button>
            <List component="nav" className="chats">
                {chats.map((chat) => (
                    <Link key={chat.title} to={`/chats/${chat.title}`}>
                        <Chat
                            title={chat.title}
                            selected={roomId === chat.title}
                            deleteChatByName={deleteChatByName}
                        />
                    </Link>
                ))}
            </List>
        </div>
    );
};
