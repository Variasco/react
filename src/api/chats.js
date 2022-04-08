import { ref, remove, set, update } from "firebase/database";
import { db } from "./firebase";

export const getChatsApi = () => ref(db, "chats/");

export const createChatApi = async (roomId) => {
    await set(ref(db, `chats/${roomId}`), { title: roomId, value: "" });
};

export const deleteChatApi = async (roomId) => {
    await remove(ref(db, `chats/${roomId}`));
    await remove(ref(db, `messages/${roomId}`));
};

export const updateValueApi = async (roomId, value) => {
    await update(ref(db, `chats/${roomId}`), { value: value });
};
