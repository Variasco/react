import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout, ChatsList, MessageList } from "../components";

export const ChatPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const listener = ({ code }) => {
            if (code === "Escape") {
                navigate("/chats");
            }
        };

        document.addEventListener("keydown", listener);

        return () => document.removeEventListener("keydown", listener);
    }, [navigate]);

    return (
        <div className="chats-container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            chats={<ChatsList />}
                            messages={
                                <div className="messages-container">
                                    <h1>Choose chat</h1>
                                </div>
                            }
                        />
                    }
                />
                <Route
                    path=":roomId"
                    element={
                        <Layout
                            chats={<ChatsList />}
                            messages={<MessageList />}
                        />
                    }
                />
            </Routes>
        </div>
    );
};
