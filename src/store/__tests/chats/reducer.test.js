import {
    chatsReducer,
    createChatsError,
    createChatsStart,
    createChatsSuccess,
    deleteChatsError,
    deleteChatsStart,
    deleteChatsSuccess,
    getChatsError,
    getChatsStart,
    getChatsSuccess,
    updateValueError,
    updateValueStart,
    updateValueSuccess,
} from "../../chats";

describe("chats reducer", () => {
    describe("get chats types", () => {
        it("start", () => {
            const state = chatsReducer(
                {
                    pendingGet: false,
                    errorGet: true,
                },
                getChatsStart(),
            );

            expect(state.pendingGet).toBe(true);
            expect(state.errorGet).toBe(null);
        });

        it("success", () => {
            const CHAT = "test chat";
            const state = chatsReducer(
                {
                    pendingGet: true,
                    chats: [],
                },
                getChatsSuccess(CHAT),
            );

            expect(state.pendingGet).toBe(false);
            expect(state.chats).toBe(CHAT);
        });

        it("error", () => {
            const ERROR = "test error";
            const state = chatsReducer(
                {
                    pendingGet: true,
                    errorGet: null,
                },
                getChatsError(ERROR),
            );

            expect(state.pendingGet).toBe(false);
            expect(state.errorGet).toBe(ERROR);
        });
    });

    describe("create chats types", () => {
        it("start", () => {
            const state = chatsReducer(
                {
                    pendingCreate: false,
                    errorCreate: true,
                },
                createChatsStart(),
            );

            expect(state.pendingCreate).toBe(true);
            expect(state.errorCreate).toBe(null);
        });

        it("success", () => {
            const state = chatsReducer(
                {
                    pendingCreate: true,
                },
                createChatsSuccess(),
            );

            expect(state.pendingCreate).toBe(false);
        });

        it("error", () => {
            const ERROR = "test error";
            const state = chatsReducer(
                {
                    pendingCreate: true,
                    errorCreate: null,
                },
                createChatsError(ERROR),
            );

            expect(state.pendingCreate).toBe(false);
            expect(state.errorCreate).toBe(ERROR);
        });
    });

    describe("delete chats types", () => {
        it("start", () => {
            const state = chatsReducer(
                {
                    pendingDelete: false,
                    errorDelete: true,
                },
                deleteChatsStart(),
            );

            expect(state.pendingDelete).toBe(true);
            expect(state.errorDelete).toBe(null);
        });

        it("success", () => {
            const state = chatsReducer(
                {
                    pendingDelete: true,
                },
                deleteChatsSuccess(),
            );

            expect(state.pendingDelete).toBe(false);
        });

        it("error", () => {
            const ERROR = "test error";
            const state = chatsReducer(
                {
                    pendingDelete: true,
                    errorDelete: null,
                },
                deleteChatsError(ERROR),
            );

            expect(state.pendingDelete).toBe(false);
            expect(state.errorDelete).toBe(ERROR);
        });
    });

    describe("update value types", () => {
        it("start", () => {
            const state = chatsReducer(
                {
                    pendingValue: false,
                    errorValue: true,
                },
                updateValueStart(),
            );

            expect(state.pendingValue).toBe(true);
            expect(state.errorValue).toBe(null);
        });

        it("success", () => {
            const state = chatsReducer(
                {
                    pendingValue: true,
                },
                updateValueSuccess(),
            );

            expect(state.pendingValue).toBe(false);
        });

        it("error", () => {
            const ERROR = "test error";
            const state = chatsReducer(
                {
                    pendingValue: true,
                    errorValue: null,
                },
                updateValueError(ERROR),
            );

            expect(state.pendingValue).toBe(false);
            expect(state.errorValue).toBe(ERROR);
        });
    });
});
