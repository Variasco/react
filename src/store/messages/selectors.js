export const messagesSelector = (roomId) => (state) => {
    return state.messages.messages[roomId] || [];
};

export const valueSelector = (state) => {
    return state.messages.value;
};
