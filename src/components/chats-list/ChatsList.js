import { List } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./chat";

export const ChatsList = () => {
    const [chats] = useState(["chat1", "chat2", "chat3"]);
    const { roomId } = useParams();

    return (
        <List component="nav" className="chats">
            {chats.map((chat, index) => (
                <Link key={chat} to={`/chats/${chat}`} >
                    <Chat
                        title={chat}
                        selected={roomId === chat}
                    />
                </Link>
            ))}
        </List>
    );
};