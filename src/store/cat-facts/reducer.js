import {
    GET_CAT_FACTS_START,
    GET_CAT_FACTS_SUCCESS,
    GET_CAT_FACTS_ERROR,
} from "./types";

const initialState = {
    catFacts: [],
    error: null,
    pending: false,
};

export const catFactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAT_FACTS_START:
            return { ...state, pending: true, error: null };
        case GET_CAT_FACTS_SUCCESS:
            return { ...state, pending: false, catFacts: action.payload };
        case GET_CAT_FACTS_ERROR:
            return { ...state, pending: false, error: action.payload };
        default:
            return state;
    }
};
