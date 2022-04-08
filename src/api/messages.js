import { push, ref, remove } from "firebase/database";
import { db } from "./firebase";

export const getMessagesApi = (roomId) => ref(db, `messages/${roomId}`);

export const sendMessageApi = async (roomId, message) => {
    const newMessage = {
        date: String(new Date()),
        ...message,
    };

    await push(ref(db, `messages/${roomId}`), newMessage);

    return newMessage;
};

export const deleteMessageApi = async (roomId, messageId) => {
    await remove(ref(db, `messages/${roomId}/${messageId}`));
};
