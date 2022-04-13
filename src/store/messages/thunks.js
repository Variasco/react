import {
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    sendMessageStart,
    sendMessageSuccess,
    sendMessageError,
} from "./index";
import { onValue } from "firebase/database";
import {
    deleteMessageError,
    deleteMessageStart,
    deleteMessageSuccess,
} from "./actions";

export const getMessagesFromDB = (roomId) => async (dispatch, _, api) => {
    try {
        dispatch(getMessagesStart()); // pendingGet: true

        const ref = await api.getMessagesApi(roomId);
        onValue(ref, (snap) => {
            const data = snap.val();
            const messageIds = Object.keys(data ?? {});
            const messages = messageIds.map((message) => ({
                author: data[message].author,
                text: data[message].text,
                id: message,
                date: data[message].date,
            }));

            dispatch(getMessagesSuccess({ roomId, messages })); // pendingGet: false
        });
    } catch (e) {
        dispatch(getMessagesError(e));
    }
};

const getBotAnswer = (message) => {
    const answers = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
    };

    return answers[message] || "Something on bot's language";
};

export const sendMessageInDB =
    (roomId, message) => async (dispatch, _, api) => {
        try {
            dispatch(sendMessageStart()); // pendingSend: true

            await api.sendMessageApi(roomId, message);

            dispatch(sendMessageSuccess()); // pendingSend: false

            if (message.author !== "Bot") {
                setTimeout(() => {
                    dispatch(
                        sendMessageInDB(roomId, {
                            author: "Bot",
                            text: getBotAnswer(message.text),
                        }),
                    );
                }, 500);
            }
        } catch (e) {
            dispatch(sendMessageError(e));
        }
    };

export const deleteMessageFromDB =
    (roomId, messageId) => async (dispatch, _, api) => {
        try {
            dispatch(deleteMessageStart());

            await api.deleteMessageApi(roomId, messageId);

            dispatch(deleteMessageSuccess());
        } catch (e) {
            dispatch(deleteMessageError(e));
        }
    };
