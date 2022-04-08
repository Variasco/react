import { request } from "./request";

export const getCatFactsApi = (amount = 1) => {
    return request.get(`/facts/random?amount=${amount}`);
};
