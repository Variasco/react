import { Button, List } from "@mui/material";
import { addNewChat, deleteChat, chatsSelector, clearChat } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Chat } from "./chat";
import { useCallback } from "react";

export const ChatsList = () => {
    // const chats = useSelector((state) => state.chats.chats);
    // вынос селектора для сохранения ссылки на функцию, передаваемой в качестве callback в useSelector
    const chats = useSelector(chatsSelector);
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewChatByName = () => {
        const name = prompt("Enter the name of the chat");
        const isValidChatName = !chats.includes(name);

        if (name && isValidChatName) {
            dispatch(addNewChat(name));
        } else {
            alert("Incorrect name of the chat");
        }
    };

    const deleteChatByName = useCallback(
        (name) => {
            dispatch(clearChat(roomId));
            dispatch(deleteChat(name));

            setTimeout(() => {
                navigate("/chats");
            }, 0);
        },
        [dispatch, navigate, roomId],
    );

    return (
        <div className="chats-nav-container">
            <Button onClick={addNewChatByName}>New chat</Button>
            <List component="nav" className="chats">
                {chats.map((chat, index) => (
                    <Link key={chat} to={`/chats/${chat}`}>
                        <Chat
                            title={chat}
                            selected={roomId === chat}
                            deleteChatByName={deleteChatByName}
                        />
                    </Link>
                ))}
            </List>
        </div>
    );
};
