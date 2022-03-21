import { SEND_MESSAGE, sendMessage } from "../messages";

export const getBotAnswer = (message) => {
    const answers = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
    };

    return answers[message] || "Something on bot's language";
};

export const botAnswer = (store) => (next) => (action) => {
    if (
        action.type === SEND_MESSAGE &&
        action.payload.message.author !== "Bot"
    ) {
        setTimeout(() => {
            store.dispatch(
                sendMessage(action.payload.roomId, {
                    author: "Bot",
                    text: getBotAnswer(action.payload.message.text),
                }),
            );
        }, 500);
    }
    return next(action);
};
