import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./Chat";

export const ChatsList = () => {
    const [chats] = useState(["chat1", "chat2", "chat3"]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <List component="nav">
            {chats.map((chat, index) => (
                <Chat
                    key={chat}
                    title={chat}
                    selected={selectedIndex === index}
                    listItemClickHandler={() => setSelectedIndex(index)}
                />
            ))}
        </List>
    );
}