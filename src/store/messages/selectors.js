export const messagesSelector = (roomId) => (state) => {
    return state.messages.messages[roomId] || [];
};

// export const valueSelector = (roomId) => (state) => {
//     return state.chats.values[roomId] || "";
// };
