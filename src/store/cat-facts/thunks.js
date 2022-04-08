import {
    getCatFactsStart,
    getCatFactsSuccess,
    getCatFactsError,
} from "./actions";

export const getCatFacts = (amount) => async (dispatch, _, api) => {
    try {
        dispatch(getCatFactsStart());
        const { data } = await api.getCatFactsApi(amount);
        let result = [];
        if (!Array.isArray(data)) {
            result.push(data);
        } else {
            result = data;
        }
        console.log("data", result);

        dispatch(getCatFactsSuccess(result));
    } catch (e) {
        dispatch(getCatFactsError(e));
    }
};
