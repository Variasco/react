import {
    getChatsStart,
    getChatsSuccess,
    getChatsError,
    createChatsStart,
    createChatsSuccess,
    createChatsError,
    deleteChatsStart,
    deleteChatsSuccess,
    deleteChatsError,
    updateValueStart,
    updateValueSuccess,
    updateValueError,
} from "./actions";
import { onValue } from "firebase/database";

export const getChatsFromDB = () => async (dispatch, _, api) => {
    try {
        dispatch(getChatsStart());
        const ref = await api.getChatsApi();

        onValue(ref, (snap) => {
            const data = snap.val();
            const chatIds = Object.keys(data);
            const chats = chatIds.map((item) => ({
                title: item,
                value: data[item].value,
            }));

            dispatch(getChatsSuccess(chats));
        });
    } catch (e) {
        dispatch(getChatsError(e));
    }
};

export const createChatInDB = (roomId) => async (dispatch, _, api) => {
    try {
        dispatch(createChatsStart());

        await api.createChatApi(roomId);

        dispatch(createChatsSuccess());
    } catch (e) {
        dispatch(createChatsError(e));
    }
};

export const deleteChatFromDB = (roomId) => async (dispatch, _, api) => {
    try {
        dispatch(deleteChatsStart());

        await api.deleteChatApi(roomId);

        dispatch(deleteChatsSuccess());
    } catch (e) {
        dispatch(deleteChatsError(e));
    }
};

export const updateValueInDB = (roomId, value) => async (dispatch, _, api) => {
    try {
        dispatch(updateValueStart());

        await api.updateValueApi(roomId, value);

        dispatch(updateValueSuccess());
    } catch (e) {
        dispatch(updateValueError(e));
    }
};
