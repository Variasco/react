import { sendMessage } from "./index";
import { getBotAnswer } from "../middlewares";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
    dispatch(sendMessage(roomId, message));

    if (message.author !== "Bot") {
        setTimeout(() => {
            dispatch(
                sendMessage(roomId, {
                    author: "Bot",
                    text: getBotAnswer(message.text),
                }),
            );
        }, 500);
    }
};
