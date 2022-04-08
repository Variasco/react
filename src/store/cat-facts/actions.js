import {
    GET_CAT_FACTS_START,
    GET_CAT_FACTS_SUCCESS,
    GET_CAT_FACTS_ERROR,
} from "./types";

export const getCatFactsStart = () => ({
    type: GET_CAT_FACTS_START,
});

export const getCatFactsSuccess = (data) => ({
    type: GET_CAT_FACTS_SUCCESS,
    payload: data,
});

export const getCatFactsError = (error) => ({
    type: GET_CAT_FACTS_ERROR,
    payload: error,
});
