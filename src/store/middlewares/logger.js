export const logger = (state) => (next) => (action) => {
    console.log("dispatching >", action);
    console.log("prev state >", state.getState());

    const result = next(action);

    console.log("next state >", state.getState());

    return result;
};
