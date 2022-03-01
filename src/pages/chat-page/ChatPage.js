import { Routes, Route } from 'react-router-dom';
import { Layout, ChatsList, MessageList } from "../../components";

export const ChatPage = () => {
    return (
        <div className="chats-container">
            <Routes>
                <Route
                    path="/"
                    element={<Layout chats={<ChatsList />} messages={
                        <div className="messages-container">
                            <h1>Choose chat</h1>
                        </div>
                    } />}
                />
                <Route
                    path=":roomId"
                    element={<Layout chats={<ChatsList />} messages={<MessageList />} />}
                />
            </Routes>
        </div>
    );
};

