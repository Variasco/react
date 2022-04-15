import {
    sendMessageInDB,
    deleteMessageFromDB,
    sendMessageStart,
    sendMessageSuccess,
    sendMessageError,
    deleteMessageStart,
    deleteMessageSuccess,
    deleteMessageError,
} from "../../messages";

/*  Невозможно протестировать без запроса в БД,
    так как не получилось api-функцию вынести полность отдельно */
// describe("get messages thunk", () => {});

describe("send message thunk", () => {
    it("success", async () => {
        const CHAT = "chat1";
        const MESSAGE = { author: "User", text: "test" };
        const DATA = "ok";
        const dispatch = jest.fn();
        const sendMessageApi = jest.fn().mockResolvedValue({ data: DATA });

        const thunk = sendMessageInDB(CHAT, MESSAGE);
        await thunk(dispatch, null, { sendMessageApi });

        expect(sendMessageApi).toBeCalledWith(CHAT, MESSAGE);
        expect(sendMessageApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, sendMessageStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, sendMessageSuccess());
    });

    it("error", async () => {
        const CHAT = "chat1";
        const MESSAGE = { author: "User", text: "test" };
        const ERROR = { error: "error" };
        const dispatch = jest.fn();
        const sendMessageApi = jest.fn().mockRejectedValue(ERROR);
        const thunk = sendMessageInDB(CHAT, MESSAGE);
        await thunk(dispatch, null, { sendMessageApi });

        expect(sendMessageApi).toBeCalledWith(CHAT, MESSAGE);
        expect(sendMessageApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, sendMessageStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, sendMessageError(ERROR));
    });
});

describe("delete message thunk", () => {
    it("success", async () => {
        const CHAT = "chat1";
        const MESSAGEID = { id: 1 };
        const dispatch = jest.fn();
        const deleteMessageApi = jest.fn().mockResolvedValue();

        const thunk = deleteMessageFromDB(CHAT, MESSAGEID);
        await thunk(dispatch, null, { deleteMessageApi });

        expect(deleteMessageApi).toBeCalledWith(CHAT, MESSAGEID);
        expect(deleteMessageApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, deleteMessageStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, deleteMessageSuccess());
    });

    it("error", async () => {
        const CHAT = "chat1";
        const MESSAGEID = { id: 1 };
        const ERROR = { error: "error" };
        const dispatch = jest.fn();
        const deleteMessageApi = jest.fn().mockRejectedValue(ERROR);
        const thunk = deleteMessageFromDB(CHAT, MESSAGEID);
        await thunk(dispatch, null, { deleteMessageApi });

        expect(deleteMessageApi).toBeCalledWith(CHAT, MESSAGEID);
        expect(deleteMessageApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, deleteMessageStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, deleteMessageError(ERROR));
    });
});
